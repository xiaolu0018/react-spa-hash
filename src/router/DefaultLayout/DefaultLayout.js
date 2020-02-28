import React, { Component } from 'react'
import { connect } from 'react-redux'
import HeadNav from '@/common/HeadNav'
import SideNav from '@/common/SideNav'
import { Modal, Layout, Spin } from 'antd'

import { Switch, Route, Redirect } from 'react-router-dom'

import menuFormat from './menuFormat.js'
import loadable from '@/components/loadable.js'
const Welcom = loadable(() => import('@/pages/Welcom.js'))
const TabPage = loadable(() => import('./TabPage.js'))
const { Header, Sider, Content } = Layout
const menuIcons = []

@connect(state => ({ menuId: state.menu.menuId }), null)
class DefaultLayout extends Component {
  state = {
    list: [],
    menuList: [],
    tabList:[],
    isFinish:true
  }
  componentDidMount() {
    //初始化
    this.init()
    this.getTab()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.menuId && prevProps.menuId !== this.props.menuId) {
      this.getTab()
    }
  }
  init = async () => {
    let res = await this.http(this.url.menuList, {})
    if (res.success) {
      let cache = res.data.map(item => {
        if (item.url) {
          item.url = item.url.replace(/(\/\w+)$/i, '');
        }
        return item;
      });
      let list = menuFormat(cache);
      this.setState({
        list: cache || [],
        menuList: list.map(item => {
          let its = menuIcons.find(menu => menu[item.menuName]);
          item.icon = its ? its[item.menuName] : 'setting';
          return item;
        }) || []
      })
    } else {
      Modal.warning({
        title: '提示',
        content: res.message
      })
    }
  }

  getTab = async () => {
    let m = this.props.menuId;
    this.setState({
      tabList: []
    })
    if (m) {
      let res = await this.http(this.url.pageTabList, {
        menuId: m
      })
      if (res.success && res.data && res.data.length) {
        let tabList = res.data.sort((pre, aft) => pre.tapId - aft.tapId) || [];
        this.setState({
          tabList: tabList
        })
      }
    }
  }
  render() {
    return (
      <Layout className="DefaultLayout divflow">
        <Header>
          <HeadNav />
        </Header>
        <Layout>
          <Sider
            width="180"
            className='sideMenuBox scrollbar'
            theme="light"
            collapsible
          >
            <SideNav list={this.state.list} menuList={this.state.menuList} />
          </Sider>
          <Content
            className="content-wrap scrollbar"
            style={{ padding: '10px' }}
          >
            <Switch>
              <Route path={'/'} component={Welcom} exact />
              <Route
                strict
                path="/pages"
                render={props => {
                  let pathname = props.location.pathname;
                  if (pathname && (/\/pages\/(\w*)\/*/.test(pathname)) && this.state.list && this.state.list.length && this.state.tabList && this.state.tabList.length) {
                    let com = RegExp.$1;
                    if (com && this.state.list.find(item => item.url === '/pages/' + com)) {
                      //side权限路由过滤
                      return <TabPage
                        {...props}
                        tabList={this.state.tabList}
                        com={RegExp.$1}
                        list={this.state.list}
                      />
                    } else {
                      return <Redirect from="*" to="/404" />
                    }
                  } else {
                    return <Spin tip="加载中" />
                  }
                }}
              />
              <Redirect from="*" to="/404" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default DefaultLayout

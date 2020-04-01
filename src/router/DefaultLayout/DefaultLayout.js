import React, { Component } from 'react'
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

export default class DefaultLayout extends Component {
  state = {
    list: [],
    menuList: [],
    load: false
  }
  componentDidMount() {
    //初始化
    this.init()
  }
  init = async () => {
    this.setState({
      load: true
    })
    let res = await this.http(this.url.menuList, {})
    if (res.success) {
      let cache = res.data.map(item => {
        if(item.url){
          item.url = item.url.replace(/(\/\w+)$/i, '');
        }
        return item;
      })
      let list = menuFormat(cache);
      this.setState({
        list: cache.filter(item => item.url) || [],
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
    this.setState({
      load: false
    })
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
                render={props => (this.state.list && !this.state.load ?
                <TabPage {...props} list={this.state.list}/> : <Spin tip="加载中" />)}
              />
              <Redirect from="*" to="/404" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
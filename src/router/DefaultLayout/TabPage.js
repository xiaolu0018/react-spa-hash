/*
  页面部分获取tabList公共组件
*/
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Switch, Redirect, Route, Link } from 'react-router-dom'
import { Tabs, Spin } from 'antd'
import { setTap } from '@/store/menu/action.js'
import AuthRoute from '@/components/AuthRoute.js'

import tabRoute from './tabRoute.js'

@connect(state => ({ menuId: state.menu.menuId, tapId: state.menu.tapId }), { setTap })
class TabPage extends PureComponent {
  constructor(props) {
    super(props)
    //list 菜单路由，com 当前tab页面
    this.state = {
      actTab: '',
      actUrl: '',
      tabList: [],
      provList: [],
      load: false,//Page load
    }
  }
  componentDidMount() {
    this.getTab()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.menuId) {
      if (this.props.menuId !== prevProps.menuId) {
        this.getTab()
      }else{
        let regs = /\/pages\/w*\/(\w*)/;
        if(!regs.test(this.props.location.pathname)){
          //菜单重复点击
          this.init()
        }
      }
      if(this.props.tapId && this.props.tapId !== prevProps.tapId){
        this.getPageProv()
      }
    }
  }
  componentWillUnmount() {
    this.setState = () => { }
  }
  init = () => {
    let path = this.props.history.location.pathname;
    let actTab, actUrl;
    if (this.state.tabList.length) {
      let tabList = this.state.tabList;
      let tab = tabList.find(item => path && item.url === path);
      actTab = tab ? tab.tapId.toString() : tabList[0].tapId.toString();
      actUrl = tab ? tab.url : tabList[0].url;
    } else {
      actTab = '';
      actUrl = '';
    }
    actTab && this.props.setTap(actTab);
    this.setState(
      {
        actTab: actTab,
        actUrl: actUrl
      },
      function () {
        if (
          this.state.actTab &&
          this.state.actUrl !== this.props.location.pathname &&
          this.state.actUrl.includes(this.props.location.pathname)
        ) {
          this.props.history.replace({
            pathname: this.state.actUrl
          })
        }
      }
    )
  }
  getTab = async () => {//tab路由
    let m = this.props.menuId;
    this.setState({
      tabList: [],
      load: true
    })
    if (m) {
      let res = await this.http(this.url.pageTabList, {
        menuId: m
      })
      if (res.success && res.data && res.data.length) {
        let tabList = res.data.sort((pre, aft) => pre.tapId - aft.tapId) || [];
        this.setState({
          tabList: tabList.map(item => {
            if (item.url) {
              item.url = item.url.replace('.jsp', '')
              item.url = '/' + item.url
            }
            return item;
          })
        })
      }
    }
    this.init()
    this.setState({
      load: false
    })
  }
  getPageProv = async () => {//页面接口权限
    if (this.props.menuId && this.props.tapId) {
      let res = await this.http(this.url.pageAuthList, {
        menuId: this.props.menuId,
        tapId: this.props.tapId
      });
      let provList = [];
      if (res.success && res.data) {
        let data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
        provList = data.otherButton ? data.otherButton : [];
        provList = data.gridButton ? provList.concat(data.gridButton) : provList;
      }
      this.setState({ provList })
    }
  }
  changeTab = activeKey => {
    this.props.setTap(activeKey);
    this.setState({
      actTab: activeKey
    })
  }
  render() {
    const { TabPane } = Tabs
    return (
      <div>
        <Tabs
          type="card"
          activeKey={this.state.actTab}
          onChange={this.changeTab}
          className="link-tab"
        >
          {this.state.tabList.map((item, index) => (
            <TabPane
              tab={
                <Link
                  className="tab-link"
                  to={{
                    pathname: item.url
                  }}
                >
                  {item.tapName}
                </Link>
              }
              key={item.tapId.toString()}
            />
          ))}
        </Tabs>
        <div
          className="tab-pane scrollbar"
          style={{ height: 'calc(100% - 40px)' }}
        >
          <Switch>
            <Route
              exact
              strict
              path={this.props.list.map(item => item.url)}
              name="load-router"
            >
              <Spin tip="加载中" />
            </Route>
            <Route
              strict
              path={this.props.list.map(item => item.url + '/')}
              name='page-router'
              render={props => {
                if (this.state.tabList.length && !this.state.load && props.location.pathname === this.state.actUrl) {
                  return (
                    <Switch>
                      {tabRoute.map(item =>
                        <AuthRoute
                          key={item.path}
                          path={item.path}
                          provList={this.state.tabList}
                          render={props => <item.component {...props} provList={this.state.provList} />}
                        />
                      )}
                      <Redirect from="*" to="/404" />
                    </Switch>
                  )
                } else {
                  return <Spin tip="加载中" />
                }
              }}
            />
            <Redirect from="*" to="/404" />
          </Switch>
        </div>
      </div>
    )
  }
}
export default TabPage
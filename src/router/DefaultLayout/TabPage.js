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

@connect(state => ({ menuId: state.menu.menuId }), { setTap })
class TabPage extends PureComponent {
  constructor(props) {
    super(props)
    //list 菜单路由，com 当前tab页面
    this.state = {
      actTab: '',
      actUrl: ''
    }
  }
  componentDidMount() {
    this.init()
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.menuId !== this.props.menuId && this.props.menuId) {
      this.init()
    } else if (this.props.com && this.props.com === prevProps.com && prevProps.location.pathname !== this.props.location.pathname) {
      let tabPath = '/pages/' + this.props.com + '/';
      if (this.props.location.pathname.includes(tabPath) && prevProps.location.pathname.includes(tabPath)) {
        //tab路由跳转切换
        let tabList = this.props.tabList;
        let path = this.props.history.location.pathname;
        let tab = tabList.find(item => path && item.url === path);
        if (tab) {
          this.props.setTap(tab.tapId.toString());
          this.setState({
            actTab: tab.tapId.toString(),
            actUrl: tab.url
          })
        }
      }
    }
  }
  componentWillUnmount() {
    this.setState = () => { }
  }
  init = () => {
    let path = this.props.history.location.pathname;
    let actTab, actUrl;
    if (this.props.tabList && this.props.tabList.length) {
      let tabList = this.props.tabList;
      let tab = tabList.find(item => path && item.url === path);
      actTab = tab ? tab.tapId.toString() : tabList[0].tapId.toString();
      actUrl = tab ? tab.url : tabList[0].url;
    } else {
      actTab = '';
      actUrl = '';
    }

    this.setState(
      {
        actTab: actTab,
        actUrl: actUrl
      },
      function () {
        this.state.actTab && this.changeTab(this.state.actTab);
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
          {this.props.tabList.map((item, index) => (
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
              strict
              path={"/pages/" + this.props.com}
              render={props => {
                let pathname = props.location.pathname;
                let regs = new RegExp('\\/pages\\/' + this.props.com + '\\/(\\w*)');
                let menuId = this.props.menuId;
                let menu = this.props.list.filter(item => +item.menuId === +menuId && pathname.includes(item.url))
                if (pathname && (regs.test(pathname)) && RegExp.$1 && this.props.tabList && this.props.tabList.length && +this.props.tabList[0].menuId === +this.props.menuId && menu.length) {
                  return (
                    <Switch>
                      {tabRoute.map(item => <AuthRoute
                        key={item.path}
                        provList={this.props.tabList}
                        path={item.path}
                        render={props => <item.component {...props} />}
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
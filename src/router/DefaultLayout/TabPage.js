/*
  页面部分获取tabList公共组件
*/
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Switch, Redirect, Route, Link } from 'react-router-dom'
import { Tabs, Result, Button, Spin } from 'antd'
import { setMenu, setTap } from '@/store/menu/action.js'
import AuthRoute from '@/components/AuthRoute.js'

import tabRoute from './tabRoute.js'

@connect(state => ({ menuId: state.menu.menuId, tapId: state.menu.tapId }), { setMenu, setTap })
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
      hasError: false
    }
  }
  static getDerivedStateFromError(error) {
    // 更新 state 使下一次渲染可以显降级 UI
    console.log(error)
    return { hasError: true };
  }
  componentDidMount() {
    this.getTab()
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.menuId) {
      if (this.props.menuId !== prevProps.menuId) {
        this.getTab()
      } else {
        let regs = /\/pages\/w*\/(\w*)/;
        if (!regs.test(this.props.location.pathname)) {
          //菜单重复点击
          this.init()
        }
      }
      if (this.props.tapId && this.props.tapId !== prevProps.tapId) {
        this.getPageProv()
      }
    }
  }
  componentWillUnmount() {
    this.props.setMenu(null);
    this.props.setTap(null);
    this.setState = () => { }
  }
  init = () => {
    let path = this.props.history.location.pathname;
    let actTab, actUrl;
    this.setState({
      hasError: false
    })
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
          this.props.history.replace(this.state.actUrl)
        }
      }
    )
  }
  getTab = async () => {
    let m = this.props.menuId;
    this.setState({
      tabList: [],
      load: true,
      hasError: false
    })
    if (m) {
      let res = await this.http(this.url.pageTabList, {
        menuId: m
      })
      if (res.success && res.data && res.data.length) {
        this.setState({
          tabList: res.data.sort((pre, aft) => pre.tapId - aft.tapId) || []
        })
      }
    }
    this.init()
    this.setState({
      load: false
    })
  }
  getPageProv = async () => {
    if (this.props.menuId && this.props.tapId) {
      let res = await this.http(this.url.pageAuthList, {
        menuId: this.props.menuId,
        tapId: this.props.tapId
      });
      let provList = [];
      if (res.success && res.data) {
        let data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
        provList = [...(data.otherButton || []), ...(data.gridButton || [])];
      }
      this.setState({ provList })
    }
  }
  changeTab = activeKey => {
    this.props.setTap(activeKey);
    this.setState({
      actTab: activeKey,
      hasError: false
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
          {
            this.state.hasError
              ?
              <Result
                status="warning"
                title="数据异常，正在处理."
                extra={
                  <Button type="primary"><Link to={{ pathname: "/" }}>返回首页</Link></Button>
                }
              />
              :
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
                          <Redirect from="*" to="404" />
                        </Switch>
                      )
                    } else {
                      return <Spin tip="加载中" />
                    }
                  }}
                />
                <Redirect from="*" to="/404" />
              </Switch>
          }
        </div>
      </div>
    )
  }
}
export default TabPage
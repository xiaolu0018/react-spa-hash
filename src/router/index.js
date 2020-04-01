import React, { Component } from 'react'
import { HashRouter , Route, Switch, Redirect } from 'react-router-dom'
import loadable from '@/components/loadable.js'
// import AuthRoute from '@/components/AuthRoute.js'

const DefaultLayout = loadable(() => import('./DefaultLayout/DefaultLayout.js'))
// const LoginUser = loadable(() => import('./LoginUser/LoginUser.js'))
const NoMatch = loadable(() => import('@/pages/NoMatch.js'))
const NoPermission = loadable(() => import('@/pages/NoPermission.js'))
const Waiting = loadable(() => import('@/pages/Waiting.js'))
export default class RouterWrap extends Component {
  render() {
    return (
      <div className="divflow">
        <HashRouter>
          <Switch>
            <Route path="/wait" component={Waiting} exact />
            <Route path="/404" component={NoMatch} exact />
            <Route path="/555" component={NoPermission} exact />
            <Route path="/" component={DefaultLayout} />
            <Redirect from="*" to="/404" />
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

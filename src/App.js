import React, { Component } from 'react'

import '@/style/normalize.less'
import '@/style/minxin.less'
import '@/style/base.less'
import RouterWrap from '@/router/index.js'

import { Provider } from 'react-redux'
import store from '@/store/store.js'
import { saveUser, clearUser } from './store/user/action'

import { createHashHistory } from 'history'

class App extends Component {
	constructor(props) {
		super(props)

		this.getUserInof()
	}
	getUserInof = async () => {
		const history = createHashHistory()
		let url = history.location.pathname + history.location.search
		history.replace('/wait')
		let res = await this.http(this.url.userInfo, {})
		if (res.success) {
			store.dispatch(saveUser(res.data))
			history.replace(url)
		} else {
			store.dispatch(clearUser())
			const history = createHashHistory()
			history.replace('/404')
		}
	}
	render() {
		return (
			<Provider store={store}>
				<div
					style={{ height: '100%', textAlign: 'center', overflow: 'hidden' }}
				>
					<RouterWrap />
				</div>
			</Provider>
		)
	}
}

export default App

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

@withRouter
@connect(state => ({ user: state.user }))
class LoginUser extends Component {
	componentDidMount() {
		if (this.props.user && this.props.user.name) {
      this.props.history.goBack();
		} else {
			window.location.replace(window.location.origin)
		}
	}
	render() {
		return <div id="LoginUser" style={{ height: '100%', width: '100%' }}></div>
	}
}

export default LoginUser

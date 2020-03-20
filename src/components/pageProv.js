/*
  子页面获取按钮权限列表公共组件
* 取消
*/
import React, { Component } from 'react'

export default (WrapCom) =>
class extends Component {
  render() {
    return <WrapCom {...this.props}/>
  }
}

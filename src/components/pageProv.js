/*
  子页面获取按钮权限列表公共组件
*/
import React, { Component } from 'react'
import { connect } from 'react-redux'

export default (WrapCom) =>
@connect(state => ({menuId: state.menu.menuId,tapId:state.menu.tapId}))
class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      provList:[]
    }
  }
  componentWillMount() {
    this.init()
  }
  componentWillUnmount() {
    this.setState = () => {}
  }
  init = async () => {
    if(this.props.menuId && this.props.tapId){
      let res = await this.http(this.url.pageAuthList,{
        menuId:this.props.menuId,
        tapId:this.props.tapId
      });
      let provList = [];
      if(res.success && res.data){
        let data = typeof res.data === 'string' ? JSON.parse(res.data) : res.data;
        provList = data.otherButton ? data.otherButton : [];
        provList = data.gridButton ? provList.concat(data.gridButton) : provList;
      }
      this.setState({provList})
    }
  }
  render() {
    return <WrapCom {...this.state}/>
  }
}

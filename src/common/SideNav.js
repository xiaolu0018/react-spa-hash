import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom' //注入route到props
import { Menu,Icon } from 'antd'
import { connect } from 'react-redux'
import {setMenu} from '@/store/menu/action.js'

@withRouter
@connect(null,{setMenu})
class SideNav extends Component {
	constructor(props) {
		super(props)
		this.state = {
			current: '',
      openKeys: []
		}
	}
	componentDidMount() {
		//监听路由
		this.props.history.listen(this.setAct)
  }
  componentDidUpdate(prevProps, prevState) {
    if((!prevProps.list || !prevProps.list.length) && this.props.list && this.props.list.length){
      this.setAct()
    }
  }
	componentWillUnmount() {
		this.setState = () => {}
  }
  setAct = () => {
    let url = this.props.history.location.pathname
    let menu = this.props.list.find(item => item.url && url.includes(item.url));
    let menuId = menu ? menu.menuId.toString() : null;
    if(menuId && menuId !== this.state.current){
      this.props.setMenu(menuId)
      let subMenu = menu ? menu.parentId : null;
      this.setState(state => {
        if (state.openKeys && state.openKeys.length) {
          return {
            current: menuId,
            openKeys:subMenu ? [...new Set([...state.openKeys,subMenu.toString()])] : state.openKeys
          }
        } else {
          return {
            current: menuId,
            openKeys: subMenu ? [subMenu.toString()] : []
          }
        }
      })
    }
  }
	handleOpen = openKeys => {
		this.setState({
			openKeys: openKeys
		})
	}
	render() {
		const { SubMenu, Item } = Menu
		const MenuList = this.props.menuList.map(item => {
			if (item.children && item.children.length) {
				return (
					<SubMenu key={item.menuId} title={<span><Icon type={item.icon} /><span>{item.menuName}</span></span>}>
						{item.children.map(its => (
							<Item key={its.menuId} onClick={()=>this.props.setMenu(its.menuId)}>
								<span>{its.menuName}</span>
								<Link
									to={{
										pathname: its.url
									}}
								></Link>
							</Item>
						))}
					</SubMenu>
				)
			} else {
				return (
					<Item key={item.menuId} onClick={()=>this.props.setMenu(item.menuId)}>
						<span>{item.menuName}</span>
						<Link
							to={{
								pathname: item.url
							}}
						></Link>
					</Item>
				)
			}
		})
		return (
			<Menu
        mode='inline'
				theme="light"
				defaultOpenKeys={this.state.openKeys}
				selectedKeys={[this.state.current]}
				onOpenChange={this.handleOpen}
			>
				{MenuList}
			</Menu>
		)
	}
}
export default SideNav

import React from 'react'

export default function NoPermission() {
	return (
		<div  style={{fontSize:'20px',height:'100%',fontWeight:'bold',paddingTop:'200px'}}>
			<div style={{color:'red'}}>用户已登录，但您没有权限访问该功能或系统！</div>
			<div>（请先联系本系统权限分配人员分配权限）</div>
		</div>
	)
}

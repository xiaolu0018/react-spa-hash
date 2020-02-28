import React from 'react'
import { Spin } from 'antd'
export default function Waiting() {
	return (
		<div style={{width:'100%',height:'100%'}}>
			<Spin size="large" style={{marginTop:'200px'}}/>
		</div>
	)
}

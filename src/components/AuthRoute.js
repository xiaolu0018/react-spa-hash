import React from 'react'
import { Route,Redirect  } from 'react-router-dom'
import store from '@/store/store.js';
import { Spin  } from 'antd';
export default (props) => {

  let userInfo = store.getState().user;
  if(!userInfo){//未登录
    return <Redirect  to={{pathname:'/login'}}  />;
  }
  //路由权限
  if(props.provList === undefined){
    //不做判断
    return <Route {...props}></Route>;
  }
  if( props.provList && props.provList.length && props.path){
    if(props.provList.find(item => item.url === props.path)){
      return <Route {...props}></Route>;
    }else{
      return <Redirect from="*" to={{pathname:'/555'}} />
    }
  }else{
    return <div><Spin tip="加载中"/></div>
  }

}


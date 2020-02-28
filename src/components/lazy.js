/*
测试封装，React.lazy 和 Suspense实现懒加载高阶组件
不对
*/
import React, { lazy, Suspense} from 'react';
import { Icon } from 'antd';
//通用的过场组件
const loadingComponent = () => {
  return (
    <div>
      <Icon type="loading" />
    </div>
  )
}

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader, loading = loadingComponent) => {
  return Loadable(
    loader,
    loading
  );
}
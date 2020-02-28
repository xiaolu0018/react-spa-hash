import { Modal } from "antd";
let modal = null;
export default (configs = {}) => {
  if(!modal){
    let config = Object.assign({
      type:'warning',//同Modal.warning
      titel:'提示',
      zIndex:9999,
      content:"数据异常",
      onOk(){
        modal=null;
      },
      onCancel(){
        modal=null;
      }
    },configs)
    modal = Modal[config.type](config);
  }else{
    // modal.destroy();
  }
}

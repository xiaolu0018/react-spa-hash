export default (provList) => (provStr,Component) => {
  if(!provStr){
    return Component;
  }
  if(provList && provList.length && provList.find(item => item.actionKey === provStr)){
    return Component;
  }else{
    return null;
  }
}
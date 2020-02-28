import store from '@/store/store.js'
export default (pre) => {
  let proList = Object.assign([],store.getState().prov);
  try{
    if(pre){
      if(!proList || !proList.length){
        return false;
      }
      if(pre.includes(',')){
        let preArr = pre.split(',');
        for(let i=0;i<preArr.length;i++){
          if(proList.includes(preArr[i])){
            return true;
          }
        }
        return false;
      }else{
        return !!proList.includes(pre);
      }
    }else{
      return true;
    }
  }catch(err){
    return false;
  }
}
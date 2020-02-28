export default (list) => {
  // menu 一维数组到二维数组,并排序
  function filterChange(arr, call) {
    //过滤并删除数组项
    let cache = [] //符合条件的数组
    let filterArr = [] //过滤后的数组
    for (let i = 0; i < arr.length; i++) {
      if (call(arr[i])) {
        cache.push(arr[i])
      } else {
        filterArr.push(arr[i])
      }
    }
    arr = filterArr //修改原数组
    return cache
  }
  let subList = [] //缓存子menu
  list.sort((a, b) => a.menuId - b.menuId)
  return list.reduce((total, item) => {
    if (!item.parentId) {
      //1级菜单
      item.children = []
      let child = filterChange(subList, its => its.parentId === item.menuid)
      if (child && child.length) {
        item.children = child;
      } else {
        item.children = []
      }
      total.push(item)
    } else {
      //子菜单
      let par = total.find(its => its.menuId === item.parentId)
      if (par) {
        par.children ? par.children.push(item) : (par.children = [item])
      } else {
        subList.push(item)
      }
    }
    return total
  }, [])
}
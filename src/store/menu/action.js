import types from './action-type.js'
// actions
export const setMenu = (data) => {
  return  {
    type: types.SETMENU,
    menuId:data
  }
}

export const setTap = (data) => {
  return {
    type:types.SETTAP,
    tapId:data
  }
}
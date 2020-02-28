import types from './action-type.js'

//init state default
const defaultState = {
  menuId:null,
  tapId:null
};



//reducer
export default (state = defaultState , action = {}) => {
  switch(action.type){
    case types.SETMENU:
      return {...state,menuId:action.menuId}
    case types.SETTAP:
        return {...state,tapId:action.tapId}
    case types.CLEARMENU:
      return defaultState;
    default:
      return state;
  }
}
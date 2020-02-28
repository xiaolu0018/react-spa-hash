import types from './action-type.js'

//init state default
const defaultState = null;



//reducer
export default (state = defaultState , action = {}) => {
  switch(action.type){
    case types.SAVEUSER:
      return action.userInfo;
    case types.CLEARUSER:
      return null;
    default:
      return state;
  }
}
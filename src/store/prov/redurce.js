import types from './action-type.js'
//init state default
const defaultState = [];
//reducer
export default (state = defaultState , action = {}) => {
  switch(action.type){
    case types.SAVEPROV:
      return {...state, ...action.provList};
    default:
      return state;
  }
}
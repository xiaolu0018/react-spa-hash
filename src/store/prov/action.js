import types from './action-type.js'
// actions
export const saveProv = (data) => {
  return  {
    type: types.SAVEPROV,
    provList:data
  }
}
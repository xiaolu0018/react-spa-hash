import types from './action-type.js'
// actions
export const saveUser = (data) => {
  return  {
    type: types.SAVEUSER,
    userInfo:data
  }
}

export const clearUser = () => {
  return {
    type:types.CLEARUSER
  }
}
import { SET_CURRENT_USER } from "../actionTypes.js"

const DEFAULT_STATE = {
  isAuthenticated: false, //should be true when user logged in
  user: {} //all the user info when logged in 
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.types) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: Object.keys(action.user).length > 0, //turn an empty object into false or if there are keys into true
        user: action.user
      }
    default:
      return state;
  }

}
import { LOGIN_SUCCESS, LOGIN_ERROR } from '../types';

export function loginState (state = false, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return true;
    case LOGIN_ERROR:
      return false;
    default:
      return state;
  }
}
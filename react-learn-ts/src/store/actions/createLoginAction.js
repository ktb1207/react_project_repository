import { LOGIN_SUCCESS, LOGIN_ERROR } from '../types/index';

export function loginSuccess(){
  return {
    type: LOGIN_SUCCESS
  }
}

export function loginError(){
  return {
    type: LOGIN_ERROR
  }
}
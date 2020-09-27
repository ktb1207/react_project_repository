/**
* action 类型
*/
export const SHOW_LOADING = 'SHOW_LOADING';
export const HIDE_LOADING = 'HIDE_LOADING';
export const SHOW_ERROR = 'SHOW_ERROR';

/**
* 其它常量
*/

/**
* action 创建函数
*/
export function hideLoadingAction(state) {
  return {
    type: HIDE_LOADING,
    state,
  }
}
export function showLoadingAction(state) {
  return {
    type: SHOW_LOADING,
    state,
  }
}
export function showErrorAction(message) {
  return {
    type: SHOW_ERROR,
    message,
  }
}
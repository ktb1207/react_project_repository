import {
  SHOW_LOADING,
  SHOW_LOADING_TYPE,
  HIDE_LOADING,
  HIDE_LOADING_TYPE,
  EXPAND_MENU,
  EXPAND_MENU_TYPE,
  HIDDEN_MENU,
  HIDDEN_MENU_TYPE,
  LOGIN_NORMAL,
  LOGIN_NORMAL_TYPE,
  LOGIN_UNUSUAL,
  LOGIN_UNUSUAL_TYPE
} from './action_type';

// show loading action
export interface ShowLoadingAction {
  type: SHOW_LOADING_TYPE;
}
// hide loading action
export interface HideLoadingAction {
  type: HIDE_LOADING_TYPE;
}

// 定义modifyAction类型，包含ShowLoadingAction和HideLoadingAction
export type ModifyLoadingAction = ShowLoadingAction | HideLoadingAction;

// 显示loading actions
export const showLoading = (): ShowLoadingAction => ({
  type: SHOW_LOADING
});
// 关闭loading
export const hideLoading = (): HideLoadingAction => ({
  type: HIDE_LOADING
});

// 展开meun action
export interface ExpandMenuAction {
  type: EXPAND_MENU_TYPE;
}

// 收起meun action
export interface HiddenMenuAction {
  type: HIDDEN_MENU_TYPE;
}

// 定义modifyAction类型，包含ExpandMenuAction和HideLoadingAction
export type ModifyMenuAction = ExpandMenuAction | HiddenMenuAction;

// 展开menu actions
export const expandMenu = (): ExpandMenuAction => ({
  type: EXPAND_MENU
});
// 关闭loading
export const hiddenMenu = (): HiddenMenuAction => ({
  type: HIDDEN_MENU
});

// 定义登录正常action
export interface LoginNormalAction {
  type: LOGIN_NORMAL_TYPE;
}
// 定义登录异常action
export interface LoginUnusualAction {
  type: LOGIN_UNUSUAL_TYPE;
}

// 定义登录联合类型
export type ModifyLoginAction = LoginNormalAction | LoginUnusualAction;

// 登录完成action
export const completeLogin = (): LoginNormalAction => ({
  type: LOGIN_NORMAL
});
// 退出登录action
export const quitLogin = (): LoginUnusualAction => ({
  type: LOGIN_UNUSUAL
});

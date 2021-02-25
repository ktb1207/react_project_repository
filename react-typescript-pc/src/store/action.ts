import { SHOW_LOADING, SHOW_LOADING_TYPE, HIDE_LOADING, HIDE_LOADING_TYPE } from './action_type';

export interface ShowLoadingAction {
  type: SHOW_LOADING_TYPE;
}
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

import { SHOW_LOADING, SHOW_LOADING_TYPE, HIDE_LOADING, HIDE_LOADING_TYPE } from './action_type';

export interface SHOWLOADINGAction {
  type: SHOW_LOADING_TYPE;
}
export interface HIDELOADINGAction {
  type: HIDE_LOADING_TYPE;
}

// 定义modifyAction类型，包含SHOWLOADINGAction和HIDELOADINGAction
export type ModifyLoadingAction = SHOWLOADINGAction | HIDELOADINGAction;

// 显示loading actions
export const showLoading = (): SHOWLOADINGAction => ({
  type: SHOW_LOADING
});
// 关闭loading
export const hideLoading = (): HIDELOADINGAction => ({
  type: HIDE_LOADING
});

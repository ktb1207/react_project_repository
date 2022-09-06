import { combineReducers } from 'redux';
import { ModifyLoadingAction, ModifyMenuAction, ModifyLoginAction } from './action';
import { SHOW_LOADING, HIDE_LOADING, EXPAND_MENU, HIDDEN_MENU, LOGIN_NORMAL, LOGIN_UNUSUAL } from './action_type';

// loading state
function loadingState(state = false, action: ModifyLoadingAction): boolean {
  switch (action.type) {
    case SHOW_LOADING:
      return true;
    case HIDE_LOADING:
      return false;
    default:
      return state;
  }
}

// menu state
function menuStatus(state = true, action: ModifyMenuAction): boolean {
  switch (action.type) {
    case EXPAND_MENU:
      return true;
    case HIDDEN_MENU:
      return false;
    default:
      return state;
  }
}
// login state
function loginStatus(state = false, action: ModifyLoginAction): boolean {
  switch (action.type) {
    case LOGIN_NORMAL:
      return true;
    case LOGIN_UNUSUAL:
      return false;
    default:
      return state;
  }
}

function testState(state = true, action: ModifyLoadingAction): boolean {
  switch (action.type) {
    case SHOW_LOADING:
      return true;
    case HIDE_LOADING:
      return false;
    default:
      return state;
  }
}

export interface IStore {
  /*全局loading*/
  loadingState: boolean;
  /*菜单展开收起状态*/
  menuStatus: boolean;
  /*登录状态*/
  loginStatus: boolean;
  /*test*/
  testState: boolean;
}

const rootReducer = combineReducers({
  loadingState,
  menuStatus,
  loginStatus,
  testState
});

export default rootReducer;

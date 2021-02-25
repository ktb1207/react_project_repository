import { combineReducers } from 'redux';
import { ModifyLoadingAction, ModifyMenuAction } from './action';
import { SHOW_LOADING, HIDE_LOADING, EXPAND_MENU, HIDDEN_MENU } from './action_type';

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

function testState(state = false, action: ModifyLoadingAction): boolean {
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
  /*test*/
  testState: boolean;
}

const rootReducer = combineReducers({
  loadingState,
  menuStatus,
  testState
});

export default rootReducer;

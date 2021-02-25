import { combineReducers } from 'redux';
import { ModifyLoadingAction } from './action';
import { SHOW_LOADING, HIDE_LOADING } from './action_type';

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
  testState
});

export default rootReducer;

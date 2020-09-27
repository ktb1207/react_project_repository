import { combineReducers } from 'redux';
import { SHOW_LOADING, HIDE_LOADING, SHOW_ERROR } from './action';

function loadingState(state = false, action) {
  switch (action.type) {
    case SHOW_LOADING:
      return true
    case HIDE_LOADING:
      return false
    default:
      return state;
  }
}

function errorMessage (state = '', action) {
  switch (action.type) {
    case SHOW_ERROR:
      return action.message;
    default:
      return state;
  }
}

function appState(state = {}, action) {
  return {
    loadingState: loadingState(state.loadingState, action),
    errorMessage: errorMessage(state.errorMessage, action),
  }
}

export default combineReducers({appState})
import { combineReducers } from 'redux';
import { DefaultRootState } from 'react-redux';

import { loginState } from './reducers/loginState';
import { loadingState } from './reducers/loadingState';

export interface IStore extends DefaultRootState {
  loginState: boolean;
  loadingState: boolean;
}

export default combineReducers({
  loginState,
  loadingState,
});

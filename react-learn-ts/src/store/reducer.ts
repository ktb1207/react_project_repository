
import { combineReducers} from 'redux';
import { DefaultRootState } from 'react-redux';

import { loginState } from './reducers/loginState';

export interface IStore extends DefaultRootState {
  loginState: Boolean;
}

export default combineReducers({
  loginState
})
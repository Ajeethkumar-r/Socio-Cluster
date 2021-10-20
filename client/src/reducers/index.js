import { combineReducers } from 'redux';
import alertReducer from './alertReducer';
import auth from './auth';
import profile from './profile'

export default combineReducers({
  alertReducer,
  auth,
  profile
});

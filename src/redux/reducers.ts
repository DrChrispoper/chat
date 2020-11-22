import { combineReducers } from 'redux';
import { userReducer as user } from './user/reducer';

const reducers = combineReducers({
  user,
});

export default reducers;

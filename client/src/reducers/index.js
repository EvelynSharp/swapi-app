import { combineReducers } from 'redux';
import user from './user';
import people from './people';

const rootReducer = combineReducers({
  user,
  people,
});

export default rootReducer;

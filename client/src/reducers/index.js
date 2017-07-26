import { combineReducers } from 'redux';
import user from './reducer_user';
import people from './reducer_people';
import planets from './reducer_planets';

const rootReducer = combineReducers({
  user,
  people,
  planets
});

export default rootReducer;

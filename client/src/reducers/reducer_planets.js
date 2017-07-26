import _ from 'lodash';
import { FETCH_HOME } from '../actions/planets';


const planets = (state = {}, action) => {
  switch(action.type) {
    // case EXAMP_PEOPLE:
    //   return _.mapKeys(action.exampPeople, 'url')
    // case SEARCH_PEOPLE:
    //   return _.mapKeys(action.searchPeople, 'url')
    case FETCH_HOME:
      return { ...state, [action.planet.url]: action.planet }
    default:
      return state;
  }
}

export default planets;

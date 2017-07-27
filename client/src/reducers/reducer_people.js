import _ from 'lodash';
import { EXAMP_PEOPLE, SEARCH_PEOPLE, SEARCH_PERSON, FETCH_RESIDENTS } from '../actions/people';


const people = (state = {}, action) => {
  switch(action.type) {
    case EXAMP_PEOPLE:
      return _.mapKeys(action.exampPeople, 'url')
    case SEARCH_PEOPLE:
      return _.mapKeys(action.searchPeople, 'url')
    case SEARCH_PERSON:
      return { ...state, [action.searchPerson.url]: action.searchPerson }
    case FETCH_RESIDENTS:
      return _.mapKeys(action.residents, 'url')
    default:
      return state;
  }
}

export default people;

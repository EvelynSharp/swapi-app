import { EXAMP_PEOPLE, SEARCH_PEOPLE } from '../actions/people';


const people = (state = [], action) => {
  switch(action.type) {
    case EXAMP_PEOPLE:
      return action.exampPeople
    case SEARCH_PEOPLE:
      return action.searchPeople
    default:
      return state;
  }
}

export default people;

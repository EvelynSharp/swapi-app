const people = (state = [], action) => {
  switch(action.type) {
    case 'EXAMP_PEOPLE':
      return action.exampPeople
    default:
      return state;
  }
}

export default people;

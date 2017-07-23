import axios from 'axios';
export const EXAMP_PEOPLE = 'EXAMP_PEOPLE';
export const SEARCH_PEOPLE = 'SEARCH_PEOPLE';

export const getExamplePeople = () => {
  return(dispatch) => {
    axios.get(`/api/people/example`)
      .then( res => { dispatch({ type: EXAMP_PEOPLE, exampPeople: res.data}) } )
      .catch( error => {
        console.log(error);
      });
  }
}

export const searchPeople = (term) => {
  return(dispatch) => {
    axios.get(`/api/people/search`, {
      params: { term }
    })
      .then( res => { dispatch({ type: SEARCH_PEOPLE, searchPeople: res.data}) } )
      .catch( error => {
        console.log(error);
      });
  }
}

import axios from 'axios';
export const EXAMP_PEOPLE = 'EXAMP_PEOPLE';
export const SEARCH_PEOPLE = 'SEARCH_PEOPLE';
export const SEARCH_PERSON = 'SEARCH_PERSON';
export const FETCH_RESIDENTS = 'FETCH_RESIDENTS';

export const fetchResidents = (residentsUrls) => {
  return(dispatch) => {
    axios.get(`/api/people/residents`, { params: { residentsUrls } })
      .then( res => { dispatch({ type: FETCH_RESIDENTS, residents: res.data })})
      .catch( error => console.log(error))
  }
}

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

export const searchPerson = (id, getplanet) => {
  return(dispatch) => {
    axios.get(`/api/people/search/${id}`)
      .then( res => {dispatch({ type: SEARCH_PERSON, searchPerson: res.data })})
      .then( () => getplanet() )
      .catch( error => {
        console.log(error);
      });
  }
}

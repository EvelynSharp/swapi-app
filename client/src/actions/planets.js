import axios from 'axios';
export const FETCH_HOME = 'FETCH_HOME';

export const fetchHome = (id, getResidents) => {
  return(dispatch) => {
    axios.get(`/api/planets/search/${id}`)
      .then( res => { dispatch({ type: FETCH_HOME, planet: res.data}) } )
      .then ( () => getResidents() )
      .catch( error => console.log( error))
  }
}

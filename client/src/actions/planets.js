import axios from 'axios';
export const FETCH_HOME = 'FETCH_HOME';

export const fetchHome = (id) => {
  return(dispatch) => {
    axios.get(`/api/planets/search/${id}`)
      .then( res => { dispatch({ type: FETCH_HOME, planet: res.data}) } )
      .catch( error => console.log( error))
  }
}


import axios from 'axios';

export const getExamplePeople = () => {
  return(dispatch) => {
    axios.get(`/api/people/example`)
      .then( res => { dispatch({ type: 'EXAMP_PEOPLE', exampPeople: res.data}) } )
      .catch( error => {
        console.log(error);
      });
  }
}

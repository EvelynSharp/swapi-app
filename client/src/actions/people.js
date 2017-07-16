
import axios from 'axios';

export const getAllPeople = () => {
  return(dispatch) => {
    console.log('hit')
    axios.get(`/api/people/all`)
      .then( res => console.log(res.data) )
      .catch( error => {
        console.log(error);
      });
  }
}

import axios from 'axios';

export const signup = (email, password) => {
  return(dispatch) => {
    axios.post(`/api/auth/signup`, { params: { email, password } })
      .then( res => console.log(res) )
      .catch( error => console.log(error))
  }
}

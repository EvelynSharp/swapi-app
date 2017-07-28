import axios from 'axios';
export const USER = 'USER';

export const signup = (email, password) => {
  return(dispatch) => {
    axios.post(`/api/auth/signup`, { params: { email, password } })
      .then( res => {
        let user = { email, token: res.data.token}
        dispatch({ type: USER, user })
      })
      .catch( error => console.log(error))
  }
}

//res.data.token

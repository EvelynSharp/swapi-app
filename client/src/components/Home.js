import React from 'react';
import axios from 'axios';
import { baseurl } from '../util/baseurl';

class Home extends React.Component {

  componentDidMount = () => {
    axios.get(`${baseurl}people/1/`)
      .then( response => {
        console.log(response.data);
      })
      .catch( error => {
        console.log(error);
      });
  }


  render() {
    return(
      <div>
       <button > test </button>
      </div>
    )
  }
}


export default Home;

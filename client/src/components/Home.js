import React from 'react';
import axios from 'axios';
import { baseurl } from '../util/baseurl';

class Home extends React.Component {

  componentDidMount = () => {
    axios.get(`${baseurl}people/`)
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
      </div>
    )
  }
}


export default Home;

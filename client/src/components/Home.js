import React from 'react';
import axios from 'axios';

class Home extends React.Component {

  componentDidMount = () => {
    axios.get('http://swapi.co/api/people/1/')
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

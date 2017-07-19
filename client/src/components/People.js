import React from 'react';
import { getExamplePeople } from '../actions/people';
import { connect } from 'react-redux';
import PeopleList from './PeopleList';

class People extends React.Component {

  componentDidMount = () => {
    this.props.dispatch( getExamplePeople() );
  }

  render() {
    return(
      <div>
        <PeopleList />
      </div>
    )
  }
}

export default connect()(People);

import React from 'react';
import { getExamplePeople } from '../actions/people';
import { connect } from 'react-redux';
import PeopleList from './PeopleList';
import PeopleSearch from './PeopleSearch';

class People extends React.Component {

  componentDidMount = () => {
    this.props.dispatch( getExamplePeople() );
  }

  render() {
    return(
      <div>
        <PeopleSearch />
        <PeopleList />
      </div>
    )
  }
}

export default connect()(People);

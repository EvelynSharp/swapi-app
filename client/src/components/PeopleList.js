import React from 'react';
import PeopleListItem from './PeopleListItem';
import { Card } from 'semantic-ui-react';
import { connect } from 'react-redux';

const PeopleList = ( {peopleExample} ) => {
  return (
    <Card.Group itemsPerRow={3} >
      { peopleExample.map( (person, index) => {
          return <PeopleListItem key={index} person={person}/>
        })
      }
    </Card.Group>
  )
}

const mapStateToProps = (state) => {
  return { peopleExample: state.people }
}

export default connect(mapStateToProps)(PeopleList);

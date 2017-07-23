import React from 'react';
import PeopleListItem from './PeopleListItem';
import { Card } from 'semantic-ui-react';

const PeopleList = ( {peopleExample} ) => {
  return (
    <div className="people-list">
    {peopleExample &&
      <Card.Group itemsPerRow={3} >
        { peopleExample.map( (person, index) => {
            return <PeopleListItem key={index} person={person}/>
          })
        }
      </Card.Group>
    }

    </div>
  )
}



export default PeopleList;

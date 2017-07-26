import React from 'react';
import PeopleListItem from './PeopleListItem';
import _ from 'lodash';
import { Card } from 'semantic-ui-react';

const PeopleList = ( {peopleExample, history} ) => {
  return (
    <div className="people-list">
    {peopleExample &&
      <Card.Group itemsPerRow={3} >
        { _.map(peopleExample, (person, index) => {
            return <PeopleListItem key={index} person={person} history={history}/>
          })
        }
      </Card.Group>
    }

    </div>
  )
}



export default PeopleList;

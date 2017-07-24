import React from 'react';
import _ from 'lodash';
import { List } from 'semantic-ui-react';

const SearchPeopleList = ({peopleSearch, history}) => {
  return (
    <div className='searched-people-list'>
      <List divided relaxed >
        { peopleSearch &&
          _.map(peopleSearch, person => {
            let id = person.url.replace(/^\D+/g, '');
            return (
              <List.Content key={person.name} onClick={() => history.push(`/people/${id}`)}>
                <List.Description>
                  <span>Name: {person.name}</span>
                  <span>Gender: {person.gender}</span>
                  <span>Height: {person.height}</span>
                </List.Description>
              </List.Content>
            )
          })
        }
      </List>
    </div>
  )
}

export default SearchPeopleList;

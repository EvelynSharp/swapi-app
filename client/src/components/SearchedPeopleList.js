import React from 'react';
import { List } from 'semantic-ui-react';

const SearchPeopleList = ({peopleSearch}) => {
  return (
    <div className='searched-people-list'>
      <List divided relaxed >
        { peopleSearch &&
          peopleSearch.map( person => {
            return (
              <List.Content key={person.name}>
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

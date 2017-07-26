import React from 'react';
import { Card, Grid } from 'semantic-ui-react';

const PeopleListItem = ( {person, history} ) => {
  let id = person.url.replace(/^\D+/g, '');

  return(
    <Card>
      <Card.Content onClick={() => history.push(`/people/${id}`)}>
        <Card.Header>{person.name}</Card.Header>
        <Card.Meta>{person.gender}</Card.Meta>
        <Card.Description>
          <Grid>
            <Grid.Column width={8}>{`Height: ${person.height}`}</Grid.Column>
            <Grid.Column width={8}>{`Mass: ${person.mass}`}</Grid.Column>
            <Grid.Column width={8}>{`Hair Color: ${person.hair_color}`}</Grid.Column>
            <Grid.Column width={8}>{`Skin Color: ${person.skin_color}`}</Grid.Column>
          </Grid>
        </Card.Description>
      </Card.Content>
    </Card>

  )

}

export default PeopleListItem;

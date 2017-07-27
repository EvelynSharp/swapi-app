import React from 'react';
import _ from 'lodash';
import { fetchHome } from '../actions/planets';
import { fetchResidents } from '../actions/people';
import { connect } from 'react-redux';
import { List, Grid, Button } from 'semantic-ui-react';

class Planet extends React.Component {

  componentDidMount = () => {
    let { dispatch, match } = this.props;
    dispatch( fetchHome(match.params.id, this.getResidents) );
  }

  getResidents = () => {
    let { dispatch, planet } = this.props;
    dispatch( fetchResidents(planet.residents) );
  }

  displayResidents = () => {
    let { residents, planet, history } = this.props;
    if ( !_.isEmpty(residents) && !_.isEmpty(planet) ) {
      let check = planet.residents.filter( r => residents[r] )
      if( check.length !== planet.residents.length) { return null }
      return planet.residents.map( r => {
        let id = residents[r].url.replace(/^\D+/g, '');
        return (
          <List.Item key={r} onClick={ () => history.push(`/people/${id}`)}>
            <List.Icon name='user outline' />
            <List.Content> { residents[r].name } </List.Content>
          </List.Item>
        )
      })
    }
  }

  render() {
    let { planet, history } = this.props;
    if (!planet) { return <div> Loading... </div>}
    return(
      <div>
        <Grid>
          <Grid.Row centered>{this.props.planet.name}</Grid.Row>
          <Grid.Row centered>Residents</Grid.Row>
          <Grid.Row centered>
            <List>{ this.displayResidents() }</List>
          </Grid.Row>
          <Grid.Row centered>
            <Button primary onClick={ () => history.push('/people')}>
              Back To People
            </Button>
          </Grid.Row>
        </Grid>

      </div>
    )
  }
}

const mapStateToProps = ( state, props ) => {
  const url = 'http://swapi.co/api/planets/'+props.match.params.id + '/'
  return { planet: state.planets[url], residents: state.people}
}

export default connect(mapStateToProps)(Planet);

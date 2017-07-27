import React from 'react';
import _ from 'lodash';
import { fetchHome } from '../actions/planets';
import { fetchResidents } from '../actions/people';
import { connect } from 'react-redux';

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
    let { residents, planet } = this.props;
    if ( !_.isEmpty(residents) && !_.isEmpty(planet) ) {
      return planet.residents.map( r => {
        return (
          <li key={r}> { residents[r].name } </li>
        )
      })
    }
  }

  render() {
    let { planet } = this.props;
    if (!planet) { return <div> Loading... </div>}
    return(
      <div>
        {this.props.planet.name}
        <div>Residents</div>
        <ul>
          { this.displayResidents() }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ( state, props ) => {
  const url = 'http://swapi.co/api/planets/'+props.match.params.id + '/'
  return { planet: state.planets[url], residents: state.people}
}

export default connect(mapStateToProps)(Planet);

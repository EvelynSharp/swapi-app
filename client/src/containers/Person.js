import React from 'react';
import { connect } from 'react-redux';
import { searchPerson } from '../actions/people';
import { fetchHome } from '../actions/planets';

class Person extends React.Component {

  componentDidMount = () => {
    if(!this.props.person) {
      this.props.dispatch( searchPerson(this.props.match.params.id, this.getHomeland) );
    }
  }

  getHomeland = () => {
    let homeId = this.props.person.homeworld.replace(/^\D+/g, '');
    this.props.dispatch( fetchHome(homeId) )
  }

  render() {
    let { person, planet } = this.props;
    return (
      <div>
        { person ?
            <div>
              <div>Name: { person.name } </div>
              <div>Gender: { person.gender } </div>
              <div>Birth Year: { person.birth_year } </div>
              <div>Homeland: { planet? planet.name : '' } </div>
            </div>
          :
          <div> Loading ... </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  const url = 'http://swapi.co/api/people/'+props.match.params.id + '/'
  const person = state.people[url]
  const planeturl = person ?  person.homeworld : '';
  return { person, planet: state.planets[planeturl] }
}

export default connect(mapStateToProps)(Person);

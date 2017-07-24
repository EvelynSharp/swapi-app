import React from 'react';
import { getExamplePeople } from '../actions/people';
import { connect } from 'react-redux';
import PeopleList from '../components/PeopleList';
import SearchedPeopleList from '../components/SearchedPeopleList';
import PeopleSearch from './PeopleSearch';

class People extends React.Component {

  state = { search: false }

  componentDidMount = () => {
    this.props.dispatch( getExamplePeople() );
  }

  startSearch = () => {
    this.setState({search:true})
  }

  render() {
    return(
      <div>
        <PeopleSearch startSearch={this.startSearch}/>
        {this.state.search?
            <SearchedPeopleList peopleSearch={this.props.people} history={this.props.history}/>
          :
            <PeopleList peopleExample={this.props.people}/>
        }

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { people: state.people }
}

export default connect(mapStateToProps)(People);

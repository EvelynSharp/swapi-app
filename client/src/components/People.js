import React from 'react';
import { getExamplePeople } from '../actions/people';
import { connect } from 'react-redux';
import PeopleList from './PeopleList';
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
            <div>changed</div>
          :
            <PeopleList />
        }

      </div>
    )
  }
}

export default connect()(People);

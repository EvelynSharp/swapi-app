import React from 'react';
import { Form, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { searchPeople } from '../actions/people';

class PeopleSearch extends React.Component {
  state = { term: '' }

  handleSearch = (e) => {
    this.setState({ term: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch( searchPeople(this.state.term) );

  }

  render() {
    return (
      <div className='people-search'>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field inline >
          <input
            placeholder='Search By Name'
            value={this.state.term}
            onChange={this.handleSearch}
          />
          <Button>Search</Button>
          </Form.Field>
        </Form>
      </div>
    )
  }
}

export default connect()(PeopleSearch);

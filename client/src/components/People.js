import React from 'react';
import { getExamplePeople } from '../actions/people';
import { connect } from 'react-redux';

class People extends React.Component {

  componentDidMount = () => {
    this.props.dispatch( getExamplePeople() );
  }

  render() {
    return(
      <div> Hello
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
  return { people: state.people }
}

export default connect()(People);

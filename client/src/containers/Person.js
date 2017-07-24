import React from 'react';
import { connect } from 'react-redux';

class Person extends React.Component {

  componentDidMount = () => {

  }

  render() {
    console.log(this.props.person)
    console.log(this.props.match.params.id)
    return (
      <div>

        person
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {
//  return { person: state.people.filter( p => {return p.url.replace(/^\D+/g, '') === props.match.params.id}) }
}

export default connect(mapStateToProps)(Person);

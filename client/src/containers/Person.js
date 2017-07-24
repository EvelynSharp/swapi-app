import React from 'react';

class Person extends React.Component {
  render() {
    console.log(this.props.match.params.id)
    return (
      <div>

        person
      </div>
    )
  }
}

export default Person;

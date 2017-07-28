import React from 'react';
import { Header, Form, Button, Message } from 'semantic-ui-react';
import { signin } from '../actions/auth';
import { connect } from 'react-redux';

class Login extends React.Component {
  defaults = {
              email: '',
              password: '',
            }
  state = { ...this.defaults }

  componentDidMount = () => {
    this.setState({ ...this.defaults })
  }

  handleChange = (e) => {
    let { value, id } = e.target;
    this.setState({ [id]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { email, password } = this.state;
    this.props.dispatch(signin( email, password ));
  }

  render() {
    let { email, password } = this.state;
    return (
      <div>
        <Form onSubmit={this.handleSubmit} error>
          <Form.Group  >
            <Form.Field width={4}><label style={{ textAlign: 'left', marginTop: '0.5em'}}>Email:</label></Form.Field>
            <Form.Field width={1}/>
            <Form.Field width={11}>
              <Form.Input
                id="email"
                required
                type="email"
                onChange={this.handleChange}
                value={email}
              />
            </Form.Field>
          </Form.Group>
          <Form.Group >
            <Form.Field width={4}><label style={{ textAlign: 'left' , marginTop: '0.5em'}}>Password:</label></Form.Field>
            <Form.Field width={1}/>
            <Form.Field width={11}>
              <Form.Input
                id="password"
                required
                type="password"
                onChange={this.handleChange}
                value={password}
              />
            </Form.Field>
          </Form.Group>
          <Button primary>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default connect()(Login);

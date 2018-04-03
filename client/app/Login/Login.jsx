import React from "react";
import { ErrorMessage } from "../Components";
import {
  Jumbotron,
  Button,
  InputGroup,
  Input,
  InputGroupAddon
} from "reactstrap";
import { Link } from "react-router-dom";
import { userActions } from '../Actions';
import { connect } from 'react-redux';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.props.dispatch(userActions.logout());

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    const { dispatch } = this.props;
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  }

  render() {
    return (
      <Jumbotron className="login">
        <h1 className="display-4">Login</h1>
        <InputGroup className="mt-3">
          <Input placeholder="username" />
          <InputGroupAddon addonType="append">@example.com</InputGroupAddon>
        </InputGroup>
        <Input placeholder="password" />
        <p className="text-danger" hidden>
          Incorrect Username / Password.
        </p>
        <Button color="primary">Login</Button>
        <br/><br/>
        <p className="mt-3">Don't have an account?</p>
        <Button tag={Link} to="/signup" color="primary">Create Account</Button>
      </Jumbotron>
    );
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
      loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(Login);
export { connectedLoginPage as Login }; 
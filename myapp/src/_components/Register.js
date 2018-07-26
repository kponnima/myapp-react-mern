import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

class Register extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      email: '',
      phone: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password, email, phone } = this.state;
    const date_created = new Date();
    const role_id = Number(2);
    const privilege_id = Number(1);
    const status_id = Number(1);

    axios.post('/api/auth/register', { username, password, email, phone, date_created, role_id, privilege_id, status_id })
      .then((result) => {
        this.props.history.push("/login")
      });
  }

  render() {
    const { username, password, email, phone } = this.state;
    return (
      <div class="container">
        <form class="form-signin" onSubmit={this.onSubmit}>
          <h2 class="form-signin-heading">Register</h2>
          <label for="inputUsername" class="sr-only">Username</label>
          <input type="text" class="form-control" placeholder="Username" name="username" value={username} onChange={this.onChange} required/>
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" class="form-control" placeholder="Password" name="password" value={password} onChange={this.onChange} required/>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" class="form-control" placeholder="Email address" name="email" value={email} onChange={this.onChange} required/>
          <label for="inputPhone" class="sr-only">Phone</label>
          <input type="phone" class="form-control" placeholder="Phone" name="phone" value={phone} onChange={this.onChange} required/>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
          <Link to="/login"><button class="btn btn-lg btn-block">Cancel</button></Link>
        </form>
      </div>
    );
  }
}

export default Register;
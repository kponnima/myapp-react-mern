import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FormErrors } from './shared/FormErrors';

var STATES = [
  'Select', 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI',
  'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
  'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR',
  'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
]

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      firstname: '',
      middlename: '',
      lastname: '',
      address1: '',
      address2: '',
      city: '',
      addressstate: '',
      zipcode: '',
      email: '',
      phone: '',
      dob: '',

      formValid: false,
      formErrors: {
        username: '',
        password: '',
        firstname: '',
        middlename: '',
        lastname: '',
        address1: '',
        address2: '',
        city: '',
        addressstate: '',
        zipcode: '',
        email: '',
        phone: '',
        dob: ''
      },
      usernameValid: false,
      passwordValid: false,
      firstnameValid: false,
      middlenameValid: false,
      lastnameValid: false,
      address1Valid: false,
      address2Valid: false,
      cityValid: false,
      addressstateValid: false,
      zipcodeValid: false,
      emailValid: false,
      phoneValid: false,
      dobValid: false,
      touched: {
        username: false,
        password: false,
        firstname: false,
        middlename: false,
        lastname: false,
        address1: false,
        address2: false,
        city: false,
        addressstate: false,
        zipcode: false,
        email: false,
        phone: false,
        dob: false
      },
      message: ''
    };

    /*     this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); */
  }

  handleChange = (e) => {
    /*     const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state); */
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => { this.validateField(name, value) });
  }

  /*   handleBlur = (field) => (e) => {
      this.setState({
        touched: { ...this.state.touched, [field]: true },
      });
    } */

  handleSubmit = (e) => {
    e.preventDefault();

    const { username, password, firstname, middlename, lastname, address1, address2, city, addressstate, zipcode, email, phone, dob } = this.state;
    const date_created = new Date();
    const role_id = Number(2);
    const privilege_id = Number(1);
    const status_id = Number(1);

    axios.post('/api/auth/register', { username, password, firstname, middlename, lastname, address1, address2, city, addressstate, zipcode, email, phone, dob, date_created, role_id, privilege_id, status_id })
      .then((result) => {
        if(result.success) {
          this.props.history.push("/login")
        }else{
          this.state.message = '' + result.msg;
        }
      });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let usernameValid = this.state.usernameValid;
    let passwordValid = this.state.passwordValid;
    let firstnameValid = this.state.firstnameValid;
    let middlenameValid = this.state.middlenameValid;
    let lastnameValid = this.state.lastnameValid;
    let address1Valid = this.state.address1Valid;
    let address2Valid = this.state.address2Valid;
    let cityValid = this.state.cityValid;
    let addressstateValid = this.state.addressstateValid;
    let zipcodeValid = this.state.zipcodeValid;
    let emailValid = this.state.emailValid;
    let phoneValid = this.state.phoneValid;
    let dobValid = this.state.dobValid;

    switch (fieldName) {
      case 'username':
        usernameValid = value.length >= 6;
        fieldValidationErrors.username = usernameValid ? '' : ' is  too short';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' is too short';
        break;
      case 'firstname':
        firstnameValid = value.length >= 1;
        fieldValidationErrors.firstname = firstnameValid ? '' : ' is  too short';
        break;
      case 'middlename':
        middlenameValid = value.length >= 0;
        fieldValidationErrors.middlename = middlenameValid ? '' : ' is  too short';
        break;
      case 'lastname':
        lastnameValid = value.length >= 1;
        fieldValidationErrors.lastname = lastnameValid ? '' : ' is  too short';
        break;
      case 'address1':
        address1Valid = value.length >= 1;
        fieldValidationErrors.address1 = address1Valid ? '' : ' is  too short';
        break;
      case 'address2':
        address2Valid = value.length >= 1;
        fieldValidationErrors.address2 = address2Valid ? '' : ' is  too short';
        break;
      case 'city':
        cityValid = value.length >= 1;
        fieldValidationErrors.city = cityValid ? '' : ' is  too short';
        break;
      case 'addressstate':
        addressstateValid = value.length >= 1;
        fieldValidationErrors.addressstate = addressstateValid ? '' : ' is  too short';
        break;
      case 'zipcode':
        zipcodeValid = value.length >= 1;
        fieldValidationErrors.zipcode = zipcodeValid ? '' : ' is  too short';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' is invalid';
        break;
      case 'phone':
        phoneValid = value.length >= 1;
        fieldValidationErrors.phone = phoneValid ? '' : ' is  too short';
        break;
      case 'dob':
        dobValid = value.length >= 1;
        fieldValidationErrors.dob = dobValid ? '' : ' is  too short';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      usernameValid: usernameValid,
      passwordValid: passwordValid,
      firstnameValid: firstnameValid,
      middlenameValid: middlenameValid,
      lastnameValid: lastnameValid,
      address1Valid: address1Valid,
      address2Valid: address2Valid,
      cityValid: cityValid,
      addressstateValid: addressstateValid,
      zipcodeValid: zipcodeValid,
      emailValid: emailValid,
      phoneValid: phoneValid,
      dobValid: dobValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.usernameValid && this.state.passwordValid && this.state.firstnameValid && this.state.lastnameValid
        && this.state.address1Valid && this.state.cityValid && this.state.addressstateValid && this.state.zipcodeValid && this.state.emailValid
        && this.state.phoneValid && this.state.dobValid
    });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  render() {
    //const { username, password, firstname, middlename, lastname, address1, address2, city, addressstate, zipcode, email, phone, dob, message } = this.state;
    /*     const errors = this.validate(this.state.username);
        const shouldMarkError = (field) => {
          const hasError = errors[field];
          const shouldShow = this.state.touched[field];
          return hasError ? shouldShow : false;
        }; */
    /*     const isEnabled = username.length > 0 && password.length > 0 && firstname.length > 0 && lastname.length > 0 && address1.length > 0
          && city.length > 0 && state.length > 0 && zipcode.length > 0 && email.length > 0 && phone.length > 0; */
    var options = STATES.map(function (value) {
      return <option value={value}>{value}</option>
    })

    return (
      <div className="container">

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h2>Register</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <FormErrors formErrors={this.state.formErrors} />
            <span> {this.state.message}</span>
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3">
              <div className={`form-group  ${this.errorClass(this.state.formErrors.username)}`}>
                <label htmlFor="profile-username">Username</label>
                <input type="text" className="form-control" id="profile-username" name="username" placeholder="Username"
                  value={this.state.username} onChange={this.handleChange} autoFocus></input>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3">
              <div className={`form-group  ${this.errorClass(this.state.formErrors.password)}`}>
                <label htmlFor="profile-password">Password</label>
                <input type="text" className="form-control" id="profile-password" name="password" placeholder="Password"
                  value={this.state.password} onChange={this.handleChange}></input>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3">
              <div className={`form-group  ${this.errorClass(this.state.formErrors.firstname)}`}>
                <label htmlFor="profile-firstname">First Name</label>
                <input type="text" className="form-control" id="profile-firstname" name="firstname" placeholder="First Name"
                  value={this.state.firstname} onChange={this.handleChange}></input>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3">
              <div className={`form-group  ${this.errorClass(this.state.formErrors.middlename)}`}>
                <label htmlFor="profile-middlename">Middle Name</label>
                <input type="text" className="form-control" id="profile-middlename" name="middlename" placeholder="Middle Name"
                  value={this.state.middlename} onChange={this.handleChange}></input>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3">
              <div className={`form-group  ${this.errorClass(this.state.formErrors.lastname)}`}>
                <label htmlFor="profile-lastname">Last Name</label>
                <input type="text" className="form-control" id="profile-lastname" name="lastname" placeholder="Last Name"
                  value={this.state.lastname} onChange={this.handleChange}></input>
              </div>
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <h4>Address:</h4>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3">
              <div className={`form-group  ${this.errorClass(this.state.formErrors.address1)}`}>
                <label htmlFor="profile-address1">Address 1</label>
                <input type="text" className="form-control" id="profile-address1" name="address1" placeholder="Address 1"
                  value={this.state.address1} onChange={this.handleChange}></input>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3">
              <div className={`form-group  ${this.errorClass(this.state.formErrors.address2)}`}>
                <label htmlFor="profile-address2">Address 2</label>
                <input type="text" className="form-control" id="profile-address2" name="address2" placeholder="Address 2"
                  value={this.state.address2} onChange={this.handleChange}></input>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3">
              <div className={`form-group  ${this.errorClass(this.state.formErrors.city)}`}>
                <label htmlFor="profile-city">City</label>
                <input type="text" className="form-control" id="profile-city" name="city" placeholder="City"
                  value={this.state.city} onChange={this.handleChange}></input>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3">
              <div className={`form-group  ${this.errorClass(this.state.formErrors.addressstate)}`}>
                <label htmlFor="profile-state">State</label>
                <select className="form-control" id="profile-state" placeholder="Select state" value={this.state.addressstate}
                  name="addressstate" onChange={this.handleChange}>{options}</select>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3">
              <div className={`form-group  ${this.errorClass(this.state.formErrors.zipcode)}`}>
                <label htmlFor="profile-zipcode">Zipcode</label>
                <input type="text" className="form-control" id="profile-zipcode" placeholder="Zipcode" name="zipcode"
                  value={this.state.zipcode} onChange={this.handleChange}></input>
              </div>
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3">
              <div className={`form-group  ${this.errorClass(this.state.formErrors.email)}`}>
                <label htmlFor="profile-email">Email address</label>
                <input type="email" className="form-control" id="profile-email" placeholder="Email" name="email"
                  value={this.state.email} onChange={this.handleChange}></input>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3">
              <div className={`form-group  ${this.errorClass(this.state.formErrors.phone)}`}>
                <label htmlFor="profile-phone">Phone</label>
                <input type="tel" className="form-control" id="profile-phone" placeholder="Phone" name="phone"
                  value={this.state.phone} onChange={this.handleChange}></input>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3">
              <div className={`form-group  ${this.errorClass(this.state.formErrors.dob)}`}>
                <label htmlFor="profile-dob">Date Of Birth</label>
                <input type="tel" className="form-control" id="profile-dob" placeholder="e.g. 01/01/1970" name="dob"
                  value={this.state.dob} onChange={this.handleChange}></input>
              </div>
            </div>
          </div>

          <hr className="featurette-divider"></hr>

          <div className="row">
            <div className="col-xs-4 col-sm-4 col-md-4">
              <Link to="/login"><button type="button" className="btn btn-default">Cancel</button></Link>
            </div>
            <div className="col-xs-8 col-sm-8 col-md-8">
              <button type="submit" className="btn btn-primary active" disabled={!this.state.formValid}>Register</button>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default Register;
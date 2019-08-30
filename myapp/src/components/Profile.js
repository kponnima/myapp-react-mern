import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Profile.css';

var STATES = [
    'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FL', 'GA', 'HI',
    'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS',
    'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR',
    'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
]

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            message: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        //const { username } = this.state;
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        //axios.defaults.params= localStorage.getItem('username');
        axios.get('/api/auth/profile/' + this.props.match.params.username)
            .then(res => {
                this.setState({ profile: res.data["0"] });
                //console.log(this.state.profile);
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    this.props.history.push("/login");
                }
            });
    }

    handleBack = (e) => {
        this.props.history.goBack();
    }

    handleChange = (e) => {
        const state = this.state.profile
        //state[e.target.name] = e.target.value;
        console.log(e.target.name);
        //this.setState({ profile: state });
        this.setState({
            profile: e.target.value
        })
    }

    handleSubmit = (e) => {
        alert('A name was submitted: ' + this.state.profile);
        e.preventDefault();

        const { username, email, phone, firstname } = this.state.profile;

        axios.post('/api/home/user', { username, email, phone, firstname })
            .then((result) => {
                this.setState({ message: '' });
                this.props.history.push("/profile/" + this.props.match.params.username)
            })
            .catch((error) => {
                if (error.response.status === 401) {
                    this.setState({ message: 'Profile update failed. Please verify the details and try again' });
                }
            });
    }

    render() {
        const { message } = this.state;
        //console.log(this.state.profile.username);
        return (
            <div className="container">

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <button type="button" className="btn btn-default" onClick={this.handleBack}>Back</button>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                        <span> {message}</span>
                    </div>
                </div>

                <hr className="featurette-divider"></hr>

                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="form-group">
                                <label htmlFor="profile-username">Username</label>
                                <input type="text" className="form-control" id="profile-username" placeholder="Username" readOnly={true}
                                    value={this.state.profile.username} onChange={this.handleChange}></input>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="form-group">
                                <label htmlFor="profile-firstname">First Name</label>
                                <input type="text" className="form-control" id="profile-firstname" placeholder="First Name"
                                    value={this.state.profile.firstname} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="form-group">
                                <label htmlFor="profile-middlename">Middle Name</label>
                                <input type="text" className="form-control" id="profile-middlename" placeholder="Middle Name"
                                    value={this.state.profile.middlename} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="form-group">
                                <label htmlFor="profile-lastname">Last Name</label>
                                <input type="text" className="form-control" id="profile-lastname" placeholder="Last Name"
                                    value={this.state.profile.lastname} onChange={this.handleChange}></input>
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
                            <div className="form-group">
                                <label htmlFor="profile-address1">Address 1</label>
                                <input type="text" className="form-control" id="profile-address1" placeholder="Address 1"
                                    value={this.state.profile.address1} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="form-group">
                                <label htmlFor="profile-address2">Address 2</label>
                                <input type="text" className="form-control" id="profile-address2" placeholder="Address 2"
                                    value={this.state.profile.address2} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="form-group">
                                <label htmlFor="profile-city">City</label>
                                <input type="text" className="form-control" id="profile-city" placeholder="City"
                                    value={this.state.profile.city} onChange={this.handleChange}></input>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="form-group">
                                <label htmlFor="profile-state">State</label>
                                <select className="form-control" id="profile-state" placeholder="Select state" value={this.state.profile.state} onChange={this.handleChange}>
                                    <option value={STATES}></option>
                                </select>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="form-group">
                                <label htmlFor="profile-zipcode">Zipcode</label>
                                <input type="text" className="form-control" id="profile-zipcode" placeholder="Zipcode"
                                    value={this.state.profile.zipcode} onChange={this.handleChange}></input>
                            </div>
                        </div>
                    </div>

                    <hr className="featurette-divider"></hr>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="form-group">
                                <label htmlFor="profile-email">Email address</label>
                                <input type="email" className="form-control" id="profile-email" placeholder="Email"
                                    value={this.state.profile.email} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="form-group">
                                <label htmlFor="profile-phone">Phone</label>
                                <input type="tel" className="form-control" id="profile-phone" placeholder="Phone"
                                    value={this.state.profile.phone} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="form-group">
                                <label htmlFor="profile-dob">Date Of Birth</label>
                                <input type="tel" className="form-control" id="profile-dob" placeholder="e.g. 01/01/1970"
                                    value={this.state.profile.dob} onChange={this.handleChange}></input>
                            </div>
                        </div>
                    </div>

                    <hr className="featurette-divider"></hr>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="form-group">
                                <label htmlFor="profile-privilege">Privilege</label>
                                <input type="text" className="form-control" id="profile-privilege" placeholder="Privilege"
                                    value={this.state.profile.privilege_id} onChange={this.handleChange}></input>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-3">
                            <div className="form-group">
                                <label htmlFor="profile-status">Status</label>
                                <input type="text" className="form-control" id="profile-status" placeholder="Status"
                                    value={this.state.profile.status_id} onChange={this.handleChange}></input>
                            </div>
                        </div>
                    </div>

                    <hr className="featurette-divider"></hr>

                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12">
                            <button type="submit" className="btn btn-primary" value="Submit">Save</button>
                        </div>
                    </div>

                </form>

            </div>
        );
    }
}

export default Profile;
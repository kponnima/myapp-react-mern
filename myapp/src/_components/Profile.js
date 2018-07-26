import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Profile.css';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            profile: {},
            message: '',
        };
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

    onChange = (e) => {
        const state = this.state.profile
        state[e.target.name] = e.target.value;
        this.setState({profile:state});
    }

    onSubmit = (e) => {
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
        //const { fromcity, tocity, departdate, returndate, message } = this.state;
        //console.log(this.state.profile.username);
        return (
            <div className="container">

                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12">
                    </div>
                </div>

                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="profile-username">Username</label>
                        <input type="text" className="form-control" id="profile-username" placeholder="Username" readOnly={true}
                            value={this.state.profile.username} onChange={this.onChange}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="profile-email">Email address</label>
                        <input type="email" className="form-control" id="profile-email" placeholder="Email"
                            value={this.state.profile.email} onChange={this.onChange}></input>
                    </div>
                    <button type="submit" className="btn btn-default" value="Submit">Submit</button>
                </form>

            </div>
        );
    }
}

export default Profile;
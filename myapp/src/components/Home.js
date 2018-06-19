import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Login.css';

class Home extends Component {
  constructor() {
    super();
    this.state = {
        flights: [],
        fromcity: '',
        tocity: '',
        departdate: '',
        returndate: '',
        message: ''
      };
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  onSubmit = (e) => {
    e.preventDefault();

    const { fromcity, tocity, departdate, returndate } = this.state;

    axios.post('/api/home/flight', { fromcity, tocity, departdate, returndate })
      .then((result) => {
        this.setState({ message: '' });
        this.props.history.push("/flight-search-results")
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.setState({ message: 'Flight search failed.Please enter different search criteria or try again' });
        }
      });
  }
  componentDidMount() {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    axios.get('/api/home/flight')
      .then(res => {
        this.setState({ flights: res.data });
        console.log(this.state.flights);
      })
      .catch((error) => {
        if(error.response.status === 401) {
          this.props.history.push("/login");
        }
      });
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

  render() {
    const { fromcity, tocity, departdate, returndate, message } = this.state;
    return (
      <div class="container">
       <div class="row">
        <form class="form-flight-search" onSubmit={this.onSubmit}>
          {message !== '' &&
            <div class="alert alert-warning alert-dismissible" role="alert">
              { message }
            </div>
          }
          <h2 className="form-signin-heading">Flight Search</h2>
          <div class="btn-group" >
            <button class="btn btn-primary" type="button" id="traveltype" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            One Way
            </button>
            <div class="dropdown-menu" aria-labelledby="traveltype">
              <button class="dropdown-item" type="button">One Way</button >
              <button  class="dropdown-item" type="button">Round Trip</button >
              <button  class="dropdown-item" type="button">Multi City</button >
            </div>
            <button type="button" class="btn btn-secondary">Travelers</button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Adults</a>
              <a class="dropdown-item" href="#">Child</a>
              <a class="dropdown-item" href="#">Lap Child</a>
            </div>
            <button type="button" class="btn btn-secondary">Economy</button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="#">Economy</a>
              <a class="dropdown-item" href="#">Premium Economy</a>
              <a class="dropdown-item" href="#">Business</a>
              <a class="dropdown-item" href="#">First</a>
            </div>
          </div>
          <div class="col-sm">
            <label htmlFor="inputfromcity" class="sr-only">FROM</label>
            <input type="text" class="form-control" placeholder="From" name="fromcity" value={fromcity} onChange={this.onChange} required/>
          </div>
          <div class="col-sm">
            <label htmlFor="inputtocity" class="sr-only">TO</label>
            <input type="text" class="form-control" placeholder="To" name="tocity" value={tocity} onChange={this.onChange} required/>
          </div>
          <div class="col-sm">
            <label htmlFor="inputDepart" class="sr-only">Depart</label>
            <input type="date" class="form-control" placeholder="Depart" name="departdate" value={departdate} onChange={this.onChange} required/>
          </div>
          <div class="col-sm">
           <label htmlFor="inputReturn" class="sr-only">Return</label>
           <input type="date" class="form-control" placeholder="Return" name="returndate" value={returndate} onChange={this.onChange} required/>
          </div>
          <div class="col-lg">
          <button class="btn btn-lg btn-primary btn-block" type="submit">Search</button>
          </div>
        </form>
      </div>
       <div class="panel panel-default">
          <div class="panel-heading">
            <h3 className="panel-title">
              FLIGHT CATALOG &nbsp;
              {localStorage.getItem('jwtToken') &&
                <button className="btn btn-primary" onClick={this.logout}>Logout</button>
              }
            </h3>
          </div>
          <div class="panel-body">
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>FLIGHT NO</th>
                  <th>ORIGIN</th>
                  <th>DESTINATION</th>
                </tr>
              </thead>
              <tbody>
                {this.state.flights.map(flight =>
                  <tr>
                    <td><Link to={'/show/${flight._id}'}>{flight.flight_no}</Link></td>
                    <td>{flight.origin}</td>
                    <td>{flight.destination}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
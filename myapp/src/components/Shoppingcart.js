import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Shoppingcart.css';

class Shoppingcart extends Component {
  constructor() {
    super();
    /*     this.state = {
          flights: [],
          fromcity: '',
          tocity: '',
          departdate: '',
          returndate: '',
          message: ''
        }; */
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  onSubmit = (e) => {
    e.preventDefault();

    //const { fromcity, tocity, departdate, returndate } = this.state;

    /*     axios.post('/api/home/flight', { fromcity, tocity, departdate, returndate })
          .then((result) => {
            this.setState({ message: '' });
            this.props.history.push("/flight-search-results")
          })
          .catch((error) => {
            if (error.response.status === 401) {
              this.setState({ message: 'Flight search failed.Please enter different search criteria or try again' });
            }
          }); */
  }
  componentDidMount() {
    /*     axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
        axios.get('/api/home/flight')
          .then(res => {
            this.setState({ flights: res.data });
            console.log(this.state.flights);
          })
          .catch((error) => {
            if (error.response.status === 401) {
              this.props.history.push("/login");
            }
          }); */
  }

  render() {
    //const { fromcity, tocity, departdate, returndate, message } = this.state;
    return (
      <div className="container">

        {/* Main jumbotron for a primary marketing message or call to action */}
        <div className="jumbotron">
          <div className="container">
            <h1>Welcome to eCommerce site</h1>
            <p>This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
            <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <ul className="nav nav-pills">
              <li role="presentation" className="active"><a href="#">Shop</a></li>
              <li role="presentation"><a href="#">Checkout</a></li>
              <li role="presentation"><a href="#">Wishlist</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Shoppingcart;
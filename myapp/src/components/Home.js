import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
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

        <hr className="featurette-divider"></hr>

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <ul className="nav nav-pills">
              <li role="presentation" className="active"><a href="#">Shop</a></li>
              <li role="presentation"><a href="#">Checkout</a></li>
              <li role="presentation"><a href="#">Wishlist</a></li>
            </ul>
          </div>
        </div>

        <hr className="featurette-divider"></hr>

      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

      <div className="carousel-inner" role="listbox">
        <div className="item active">
          <img className="first-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="First slide"></img>
          <div className="container">
            <div className="carousel-caption">
              <h1>Example headline.</h1>
              <p>Note: If you're viewing this page via a <code>file://</code> URL, the "next" and "previous" Glyphicon buttons on the left and right might not load/display properly due to web browser security rules.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Sign up today</a></p>
            </div>
          </div>
        </div>

        <div className="item">
          <img className="second-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Second slide"></img>
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img className="third-slide" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Third slide"></img>
          <div className="container">
            <div className="carousel-caption">
              <h1>One more for good measure.</h1>
              <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
              <p><a className="btn btn-lg btn-primary" href="#" role="button">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>


      </div>
    );
  }
}

export default Home;
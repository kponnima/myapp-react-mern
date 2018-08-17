import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-bottom">
        <div className="container">
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <p>&copy; 2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to="#">App version: {React.version}</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Footer;
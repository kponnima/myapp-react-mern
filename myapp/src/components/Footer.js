import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  
  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">
          <div id="navbar-collapse" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/home">Home</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Footer;
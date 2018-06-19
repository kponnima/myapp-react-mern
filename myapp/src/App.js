import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Header />
        {localStorage.getItem('jwtToken') ||
                <Link to={'/login'}>Login</Link>
              }
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default App;

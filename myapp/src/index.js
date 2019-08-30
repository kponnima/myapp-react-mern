import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/shared/Header';
import Footer from './components/shared/Footer';
import Home from './components/Home';
import Profile from './components/Profile';

ReactDOM.render(
  <Router>
    <div className="container">
      <Header />
      <div>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/profile/:username' component={Profile}/>
      </div>
      <Footer />
    </div>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
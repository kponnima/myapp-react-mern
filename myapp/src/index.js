import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Login from './_components/Login';
import Register from './_components/Register';
import Header from './_components/_shared/Header';
import Footer from './_components/_shared/Footer';
import Home from './_components/Home';
import Profile from './_components/Profile';

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
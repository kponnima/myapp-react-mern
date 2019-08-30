import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  componentDidMount() {
    this.setState({ username: localStorage.getItem('username') });
  }

  onClick = (e) => {
    e.preventDefault();
  }

  logout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('username');
    window.location.reload();
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">MYAPP</a>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><Link to="/home">Home</Link></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">PRODUCTS<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Clothes</a></li>
                  <li><a href="#">Footwear</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Bags</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Gifts</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">WOMEN<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Clothes</a></li>
                  <li><a href="#">Footwear</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Bags</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Gifts</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">MEN<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Clothes</a></li>
                  <li><a href="#">Footwear</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Bags</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Gifts</a></li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">OUTLET<span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">View All</a></li>
                  <li><a href="#">Near Me</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Sale</a></li>
                </ul>
              </li>
            </ul>

            <form className="navbar-form navbar-right">
              <div className="form-group">
                <div className="col-sm-10 col-md-10">
                  <input type="text" className="form-control" placeholder="Search" />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-2 col-md-2">
                  <button type="submit" className="btn btn-success">Search</button>
                </div>
              </div>

            </form>

            <ul className="nav navbar-nav navbar-right">
              <li><Link to={'/cart'}><i className="material-icons">shopping_cart</i></Link></li>
              <li><Link to={'/wishlist'}><i className="material-icons">shopping_basket</i></Link></li>
              <li>{(localStorage.getItem('jwtToken') !== null) ? <Link to={`/profile/${this.state.username}`}><i className="material-icons">account_circle</i></Link> : <span></span>
              }
              </li>
              <li>{(localStorage.getItem('jwtToken') !== null) ? <Link onClick={this.logout} to={'/home'}>Logout</Link> : <Link to={'/login'}>Login</Link>
              }
              </li>
            </ul>
          </div>

        </div>
      </nav>
    );
  }
}

export default Header;
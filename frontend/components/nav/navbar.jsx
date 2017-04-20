import React from "react";
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

// <Link to="login"><span>{logStatus}</span></Link>

class NavBar extends React.Component {

  // this.props.currentUser

  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogin(event) {
    event.preventDefault();
    hashHistory.push("/login");
  }

  handleLogout(event) {
    event.preventDefault();
    this.props.logout();
    hashHistory.push("/login");
  }

  render() {

    const logStatus = this.props.currentUser ? "Log out" : "Login";
    const action = this.props.currentUser ? this.handleLogout : this.handleLogin;

    return (
      <nav>
          <div className="left-nav">
              <a><span>Explore</span></a>
              <a><span>Start A Project</span></a>
              <a><span>About Us</span></a>
          </div>

          <div className="center-nav">
            <i className="fa fa-motorcycle fa-3x" aria-hidden="true"></i>
            <a><h2>Jumpstarter</h2></a>
          </div>

          <div className="right-nav">
            <a><span>Search</span></a>
            <a onClick={ action } ><span>{logStatus}</span></a>

            <Link to="signup"><span>Sign Up</span></Link>
          </div>
      </nav>
    );
  }
}

export default NavBar;

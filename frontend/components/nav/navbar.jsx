import React from "react";
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

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

    const logStatus = this.props.currentUser ? "Log out" : "Log In";
    const action = this.props.currentUser ? this.handleLogout : this.handleLogin;

    return (
      <nav>

        <div className="left-nav">
            <a><span>Explore</span></a>
            <Link to="start"><span>Start a Project</span></Link>
            <Link to="about"><span>About Us</span></Link>
            <Link to="projects/1"><span>Sample Project</span></Link>
            <Link to="projects/1/edit"><span>Edit Project</span></Link>
        </div>

          <div className="center-nav">
            <div className="center">
              <i className="fa fa-motorcycle fa-3x" aria-hidden="true"></i>
              <h2>Jumpstarter</h2>
            </div>
          </div>

          <div className="right-nav">
            <i className="fa fa-search fa-1x" aria-hidden="true"></i>
            <a onClick={ action } ><span>{logStatus}</span></a>
            <Link to="signup"><span>Sign up</span></Link>
          </div>


      </nav>
    );
  }
}

export default NavBar;



//

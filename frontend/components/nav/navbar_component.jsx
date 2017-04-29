import React from "react";
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

class NavBar extends React.Component {

  // this.props.currentUser - State property received from container
  // this.props.logout      - Method received from container

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
    const action    = this.props.currentUser ? this.handleLogout : this.handleLogin;
    const signUp    = this.props.currentUser ? "" : (
      <Link to="signup">
        <span>Sign up</span>
      </Link>
    );

    return (
      <nav>

        <div className="left-nav">
            <a><span><i className="fa fa-compass fa-1x" aria-hidden="true"></i>  Explore</span></a>
            <Link to="start"><span>Start a Project</span></Link>
            <Link to="projects/1"><span>Sample Project</span></Link>
        </div>

          <div className="center-nav">
            <div className="center">
                <img src={window.images.logo}></img>
            </div>
          </div>

          <div className="right-nav">

            <i className="fa fa-search fa-1x" aria-hidden="true"></i>

            <a onClick={ action }>
              <span>{logStatus}</span>
            </a>

            { signUp }

          </div>

      </nav>
    );
  }
}

export default NavBar;

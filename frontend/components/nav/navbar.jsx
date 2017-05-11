import React from "react";
import { connect } from "react-redux";
import { Link, hashHistory } from 'react-router';

import { logout } from "../../actions/session_actions";
import { clearErrors } from "./../../actions/error_actions";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { return dispatch(logout()); },
    clearErrors: () => { return dispatch(clearErrors()); }
  };
};

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { randomNumber: Math.floor(Math.random() * 299) + 1 };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        randomNumber: Math.floor(Math.random() * 249) + 1
      });
    }, 1000);
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

    const randomId  = this.state.randomNumber;
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
            <Link to="explore">
              <span><i className="fa fa-compass fa-1x" aria-hidden="true"></i>Explore</span>
            </Link>

            <Link to="start"><span>Start a Project</span></Link>
            <Link to={`projects/${randomId}`}><span>Random Project</span></Link>
        </div>

          <div className="center-nav">
            <div className="center">
                <Link to="/">
                  <img src={window.images.logo} />
                </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

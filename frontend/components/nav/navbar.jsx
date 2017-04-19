import React from "react";

class NavBar extends React.Component {

  // this.props.currentUser

  constructor(props) {
    super(props);
  }

  render() {

    const logStatus = this.props.currentUser ? "Log out" : "Login";
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

            <a><span>{logStatus}</span></a>
            <a><span>Sign Up</span></a>
          </div>
      </nav>
    );
  }
}

export default NavBar;

import React from "react";

class NavBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav>
          <div className="left-nav">
              <a>Explore</a>
              <a>Start A Project</a>
              <a>About Us</a>
          </div>

          <div className="middle-nav">
            <i className="fa fa-motorcycle" aria-hidden="true"></i>
          </div>

          <div className="right-nav">
            Test
          </div>
      </nav>
    );
  }
}

export default NavBar;

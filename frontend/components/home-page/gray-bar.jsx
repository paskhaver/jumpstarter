import React from "react";
import { Link } from "react-router";

class GrayBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-page-gray-bar">
        <h2>Where Projects Come From</h2>
        <div className="main-page-gray-bar-text">
          <p>Every Jumpstarter project is the independent creation of someone like you.</p>
          <p>Explore some incredible ideas in our categories section!</p>
            <Link to="/explore"><button>Explore Projects</button></Link>
        </div>
      </div>
    );
  }

}

export default GrayBar;

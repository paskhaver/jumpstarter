import React from "react";

class GrayBar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main-page-gray-bar">
        <h2>Where Projects Come From</h2>
        <div>
          Every Jumpstarter project is the independent creation of someone like you.
          Want to know more about how projects happen, or start your own?
          <button>Learn More</button>
        </div>
      </div>
    );
  }

}

export default GrayBar;

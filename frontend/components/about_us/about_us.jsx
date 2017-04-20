import React from "react";

class AboutUs extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <video autoPlay loop className="about-us">
        <source src="/assets/images/anchorman.mp4" type="video/mp4" />
      </video>
    );
  }
}

export default AboutUs;

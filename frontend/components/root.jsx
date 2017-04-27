import React from "react";

import NavBarContainer from "./nav/navbar_container";
import Footer from "./footer/footer";

const Root = (props) => {
  return (
    <div>
      <NavBarContainer />
      { props.children }
    </div>
  );
};

export default Root;

// <Footer />

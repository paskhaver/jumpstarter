import React from "react";

import NavBar from "./nav/navbar";
import Footer from "./footer/footer";

const Root = (props) => {
  return (
    <div>
      <NavBar />
      { props.children }
    </div>
  );
};

export default Root;

// <Footer />

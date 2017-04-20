import React from "react";

import NavBarContainer from "./nav/navbar_container";
import Footer from "./footer/footer";
// import LoginFormContainer from "./users/login_form_container";
// import CreateUserFormContainer from "./users/create_user_form_container";

const Root = (props) => {
  return (
    <div>
      <NavBarContainer />
      { props.children }
      <Footer />
    </div>
  );
};

export default Root;

// <CreateUserFormContainer />
// <LoginFormContainer />

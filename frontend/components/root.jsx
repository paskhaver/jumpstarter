import React from "react";
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from "./users/login_form_container";
import CreateUserFormContainer from "./users/create_user_form_container";

const Root = () => {
  return (
    <div>
      <NavBarContainer />
      <CreateUserFormContainer />

      <br /><br />
      <LoginFormContainer />
    </div>
  );
};

export default Root;

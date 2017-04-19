import React from "react";
import NavBar from "./nav/navbar";
import LoginFormContainer from "./users/login_form_container";
import CreateUserFormContainer from "./users/create_user_form_container";

const Root = () => {
  return (
    <div>
      <NavBar />
      <CreateUserFormContainer />

      <br /><br />
      <LoginFormContainer />
    </div>
  );
};

export default Root;

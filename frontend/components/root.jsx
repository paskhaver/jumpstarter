import React from "react";
import LoginFormContainer from "./users/login_form_container";
import CreateUserFormContainer from "./users/create_user_form_container";

const Root = () => {
  return (
    <div>
      <LoginFormContainer />
      <CreateUserFormContainer />
    </div>
  );
};

export default Root;

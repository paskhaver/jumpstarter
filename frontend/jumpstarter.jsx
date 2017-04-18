import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./components/users/login_form";
import * as UserAPIUtil from "./util/user_api_util";
import * as SessionAPIUtil from "./util/session_api_util";

document.addEventListener("DOMContentLoaded", () => {

  window.UserAPIUtil = UserAPIUtil;
  window.SessionAPIUtil = SessionAPIUtil;

  const rootElement = document.getElementById("root");
  const reactEl = <LoginForm />;
  ReactDOM.render(reactEl, rootElement);
});

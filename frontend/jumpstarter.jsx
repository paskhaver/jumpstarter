import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./components/users/login_form";

document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  const reactEl = <LoginForm />;
  ReactDOM.render(reactEl, rootElement);
});

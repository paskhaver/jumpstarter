import React from "react";
import ReactDOM from "react-dom";
import LoginForm from "./components/users/login_form";
import * as UserAPIUtil from "./util/user_api_util";
import * as SessionAPIUtil from "./util/session_api_util";
import * as SessionActions from "./actions/session_actions";

import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser, errors: [] } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.UserAPIUtil = UserAPIUtil;
  window.SessionAPIUtil = SessionAPIUtil;
  window.SessionActions = SessionActions;

  const rootDOMElement = document.getElementById("root");
  const reactElement = <LoginForm store={store}/>;
  ReactDOM.render(reactElement, rootDOMElement);
});

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, hashHistory } from 'react-router';

import Root from "./components/root";
import LoginFormContainer from "./components/users/login_form_container";
import CreateUserFormContainer from "./components/users/create_user_form_container";
import CreateProjectContainer from "./components/projects/create_project_container";
import AboutUs from "./components/about_us/about_us";

import * as UserAPIUtil from "./util/user_api_util";
import * as SessionAPIUtil from "./util/session_api_util";
import * as ProjectAPIUtil from "./util/project_api_util";

import * as SessionActions from "./actions/session_actions";
import * as ProjectActions from "./actions/project_actions";

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
  window.ProjectAPIUtil = ProjectAPIUtil;

  window.SessionActions = SessionActions;
  window.ProjectActions = ProjectActions;

  const rootDOMElement = document.getElementById("root");

  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={Root} >
          <Route path="start" component={CreateProjectContainer} />
          <Route path="about" component={AboutUs} />
          <Route path="login"  component={LoginFormContainer} />
          <Route path="signup" component={CreateUserFormContainer} />
        </Route>
      </Router>
    </Provider>, rootDOMElement);
});

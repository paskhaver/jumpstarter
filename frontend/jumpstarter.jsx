import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Root from "./components/root";

import LoginForm from "./components/users/login_form";
import SignUpForm from "./components/users/sign_up_form";

import CreateProjectPage from "./components/projects/CreateProject/create_project_page";
import ShowProjectPage from "./components/projects/ShowProject/project_page";
import EditProjectPage from "./components/projects/EditProject/mainPage/edit_project_page";

import BasicsForm from "./components/projects/EditProject/basics/basics_form";
import RewardForm from "./components/projects/EditProject/rewards/add_reward_form";

import ExploreCategories from "./components/explore/categoriesIndex/exploreCategories";



import * as CategoryActions from "./actions/category_actions";

import configureStore from "./store/store";

document.addEventListener("DOMContentLoaded", () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session:
                              { currentUser: window.currentUser,
                                errors: []
                              }
                           };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.CategoryActions = CategoryActions;

  const rootDOMElement = document.getElementById("root");

  ReactDOM.render(
    <Provider store={store}>
      <Router history={hashHistory}>

        <Route path="/" component={Root} >

          <IndexRoute component={SignUpForm} />
          <Route path="login"  component={LoginForm} />
          <Route path="signup" component={SignUpForm} />

          <Route path="explore" component={ExploreCategories} />
          <Route path="start" component={CreateProjectPage} />

          <Route path="projects/:id" component={ShowProjectPage}>
            <Route path="edit" component={EditProjectPage}>
              <Route path="basics" component={BasicsForm} />
              <Route path="rewards" component={RewardForm} />
            </Route>
          </Route>



        </Route>
      </Router>
    </Provider>,
    rootDOMElement);
});

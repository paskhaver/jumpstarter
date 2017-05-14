import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import Root from "./components/root";

import CategoriesIndex from "./components/explore/categoriesIndex/categoriesIndex";
import CategoryPage from "./components/explore/categoryPage/categoryPage";

import HomePage from "./components/home-page/home-page";

import LoginForm from "./components/users/login_form";
import SignUpForm from "./components/users/sign_up_form";

import CreateProjectPage from "./components/projects/CreateProject/create_project_page";
import ShowProjectPage from "./components/projects/ShowProject/project_page";
import EditProjectPage from "./components/projects/edit-project/edit_project_page";

import BasicsForm from "./components/projects/edit-project/basics/basics_form";
import RewardForm from "./components/projects/edit-project/rewards/add_reward_form";

import SearchBar from "./components/search/search_bar";



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
          <IndexRoute component={HomePage} />

          <Route path="login"  component={LoginForm} />
          <Route path="signup" component={SignUpForm} />

          <Route path="search" component={SearchBar} />

          <Route path="explore" component={CategoriesIndex} >

          </Route>

          <Route path="explore/:category" component={CategoryPage} />

          <Route path="start" component={CreateProjectPage} />

          <Route path="projects/:id"  component={ShowProjectPage}>
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

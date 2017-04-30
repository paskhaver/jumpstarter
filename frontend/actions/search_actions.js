import * as SearchAPIUtil from "./../util/search_actions";
import { receiveErrors, clearErrors } from "./error_actions";

export const RECEIVE_SEARCH_PROJECTS = "RECEIVE_SEARCH_PROJECTS";

export const receiveSearchProjects = (projects) => {
  return {
    type: RECEIVE_SEARCH_PROJECTS,
    projects
  };
};

import * as SearchAPIUtil from "./../util/search_api_util";
import { receiveErrors, clearErrors } from "./error_actions";

export const RECEIVE_SEARCH_PROJECTS = "RECEIVE_SEARCH_PROJECTS";

export const receiveSearchProjects = (projects) => {
  return {
    type: RECEIVE_SEARCH_PROJECTS,
    projects
  };
};

export const fetchSearchResults = (query) => (dispatch) => {
  return SearchAPIUtil.fetchSearchResults(query)
                      .then(
                        projects => {
                          dispatch(receiveSearchProjects(projects));
                          return projects;
                        },

                        errors => {
                          return dispatch(receiveErrors(errors));
                        }
                      );
};

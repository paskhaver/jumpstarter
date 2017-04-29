import * as CategoryAPIUtil from "./../util/category_api_util";
import { receiveErrors, clearErrors } from "./error_actions";

export const RECEIVE_CATEGORY_PROJECTS = "RECEIVE_CATEGORY_PROJECTS";

export const receiveCategoryProjects = (projects) => {
  return {
    type: RECEIVE_CATEGORY_PROJECTS,
    projects
  };
};

export const fetchCategoryProjects = (category) => (dispatch) => {
  return CategoryAPIUtil.fetchCategoryProjects(category)
                        .then(

                          projects => {
                            dispatch(clearErrors());
                            dispatch(receiveCategoryProjects(projects));
                            return projects;
                          },

                          errors => {
                            dispatch(receiveErrors(errors));
                            return errors;
                          });
};

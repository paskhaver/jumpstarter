import { hashHistory } from "react-router";
import * as ProjectAPIUtil from "../util/project_api_util";
import { receiveErrors, clearErrors } from "./error_actions";
import { receiveRewards } from "./reward_actions";

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";

export const receiveProjects = (projects) => {
  return {
    type: RECEIVE_PROJECTS,
    projects
  };
};

export const receiveProject = (project) => {
  return {
    type: RECEIVE_PROJECT,
    project
  };
};

// export const fetchProjects = () => (dispatch) => {
//   return ProjectAPIUtil.fetchProjects()
//                        .then(
//                          projects => {
//                            dispatch(receiveProjects(projects));
//                            dispatch(clearErrors());
//                          },
//                          errors => {
//                            dispatch(receiveErrors(errors));
//                          }
//                        );
// };

export const fetchProject = (projectId) => (dispatch) => {
  return ProjectAPIUtil.fetchProject(projectId)
                       .then(
                         project => {
                           dispatch(receiveProject(project));
                           dispatch(receiveRewards(project.rewards));
                           return project;
                         },
                         errors => {
                           dispatch(clearErrors());
                           hashHistory.push("/start");
                           dispatch(receiveErrors(errors.responseJSON));
                           return errors.responseJSON;
                         }
                       );
};

export const createProject = (project) => (dispatch) => {
  return ProjectAPIUtil.createProject(project)
                       .then(
                         newProject => {
                           dispatch(receiveProject(newProject));
                           dispatch(clearErrors());
                           return newProject;
                         },
                         errors => {
                           return dispatch(receiveErrors(errors));
                         }
                       );
};

export const updateProject = (project) => (dispatch) => {
  return ProjectAPIUtil.updateProject(project)
                       .then(
                         updatedProject => {
                           dispatch(clearErrors());
                           return dispatch(receiveProject(updatedProject));
                         },
                         errors => {
                           return dispatch(receiveErrors(errors));
                         }
                       );
};

// export const deleteProject = (projectId) => (dispatch) => {
//   return ProjectAPIUtil.deleteProject(projectId)
//                        .then(
//                          deletedProject => {
//                            dispatch(receiveProject(deletedProject));
//                            dispatch(clearErrors());
//                          },
//                          errors => {
//                            dispatch(receiveErrors(errors));
//                          }
//                        );
// };

import * as ProjectAPIUtil from "../util/project_api_util";
import { receiveErrors, clearErrors } from "./error_actions";

export const RECEIVE_PROJECTS = "RECEIVE_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";

export const receiveProjects = (projects) => {
  return {
    action: RECEIVE_PROJECTS,
    projects
  };
};

export const receiveProject = (project) => {
  return {
    action: RECEIVE_PROJECT,
    project
  };
};

export const fetchProjects = () => (dispatch) => {
  return ProjectAPIUtil.fetchProjects()
                       .then(
                         projects => {
                           dispatch(receiveProjects(projects));
                           dispatch(clearErrors());
                         },
                         errors => {
                           dispatch(receiveErrors(errors));
                         }
                       );
};

export const fetchProject = (projectId) => {
  return ProjectAPIUtil.fetchProject(projectId)
                       .then(
                         project => {
                           dispatch(receiveProject(project));
                           dispatch(clearErrors());
                         },
                         errors => {
                           dispatch(receiveErrors(errors));
                         }
                       );
};

export const createProject = (project) => {
  return ProjectAPIUtil.createProject(project)
                       .then(
                         newProject => {
                           dispatch(receiveProject(newProject));
                           dispatch(clearErrors());
                         },
                         errors => {
                           dispatch(receiveErrors(errors));
                         }
                       );
};

export const updateProject = (project) => {
  return ProjectAPIUtil.updateProject(project)
                       .then(
                         updatedProject => {
                           dispatch(receiveProject(updatedProject));
                           dispatch(clearErrors());
                         },
                         errors => {
                           dispatch(receiveErrors(errors));
                         }
                       );
};

export const deleteProject = (projectId) => {
  return ProjectAPIUtil.deleteProject(projectId)
                       .then(
                         deletedProject => {
                           dispatch(receiveProject(deletedProject));
                           dispatch(clearErrors());
                         },
                         errors => {
                           dispatch(receiveErrors(errors));
                         }
                       );
};

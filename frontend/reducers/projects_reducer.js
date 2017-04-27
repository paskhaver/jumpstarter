import { RECEIVE_PROJECTS, RECEIVE_PROJECT } from "../actions/project_actions";
import { merge } from "lodash";

const ProjectReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {
    case RECEIVE_PROJECTS:
      newState = merge({}, state);
      newState.allProjects = action.projects;
      return newState;

    case RECEIVE_PROJECT:
      newState = merge({}, state);
      newState.currentProject = action.project;
      return newState;

    default:
      return state;
  }
};

export default ProjectReducer;

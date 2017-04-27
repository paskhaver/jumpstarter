import { RECEIVE_PROJECTS, RECEIVE_PROJECT } from "../actions/project_actions";
import { merge } from "lodash";

const nullProject = {
  id: "",
  creator_id: "",
  title: "",
  category: "",
  residence: "",
  blurb: "",
  end_date: "",
  funding_goal: "",
  description: "",
  rewards: [],
  creator_name: ""
};

const ProjectReducer = (state = nullProject, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PROJECT:
      return action.project;

    default:
      return state;
  }
};

export default ProjectReducer;

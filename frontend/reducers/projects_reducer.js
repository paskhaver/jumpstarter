import { RECEIVE_PROJECTS, RECEIVE_PROJECT } from "../actions/project_actions";
import { RECEIVE_REWARD } from "../actions/reward_actions";
import { RECEIVE_PLEDGE } from "../actions/pledge_actions";
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
  let newProject, allRewards;

  switch(action.type) {
    case RECEIVE_PROJECT:
      return action.project;

    case RECEIVE_REWARD:
      newProject = merge({}, state);
      newProject.rewards.push(action.reward);
      return newProject;

    case RECEIVE_PLEDGE:
      newProject = merge({}, state);
      newProject.amount_raised += action.pledge.amount;
      return newProject;

    default:
      return state;
  }
};

export default ProjectReducer;

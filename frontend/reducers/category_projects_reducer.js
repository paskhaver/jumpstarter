import { RECEIVE_CATEGORY_PROJECTS } from "./../actions/category_projects_actions";

const CategoryProjectsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CATEGORY_PROJECTS:
      return action.projects;

    default:
      return state;
  }

};

export default CategoryProjectsReducer;

import { RECEIVE_SEARCH_PROJECTS } from "./../actions/search_actions";

const SearchReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SEARCH_PROJECTS:
      return action.projects;

    default:
      return state;
  }

};

export default SearchReducer;

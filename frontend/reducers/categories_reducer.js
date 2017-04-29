import { RECEIVE_CATEGORIES } from "./../actions/category_actions";

const CategoriesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CATEGORIES:
      return action.categories;

    default:
      return state;
  }

};

export default CategoriesReducer;

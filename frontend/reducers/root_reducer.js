import { combineReducers } from "redux";

import SessionReducer from "./session_reducer";
import ErrorsReducer from "./errors_reducer";
import ProjectsReducer from "./projects_reducer";
import RewardsReducer from "./rewards_reducer";
import CategoriesReducer from "./categories_reducer";
import CategoryProjectsReducer from "./category_projects_reducer";
import SearchReducer from "./search_reducer";

export default combineReducers({
  errors: ErrorsReducer,
  session: SessionReducer,
  project: ProjectsReducer,
  rewards: RewardsReducer,
  categories: CategoriesReducer,
  categoryProjects: CategoryProjectsReducer,
  search: SearchReducer
});

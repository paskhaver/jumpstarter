import { combineReducers } from "redux";

import SessionReducer from "./session_reducer";
import ErrorsReducer from "./errors_reducer";
import ProjectsReducer from "./projects_reducer";
import RewardsReducer from "./rewards_reducer";

export default combineReducers({
  session: SessionReducer,
  errors: ErrorsReducer,
  project: ProjectsReducer,
  rewards: RewardsReducer
});

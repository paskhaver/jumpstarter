import { combineReducers } from "redux";

import SessionReducer from "./session_reducer";
import UsersReducer from "./users_reducer";
// import ProjectsReducer from "./projects_reducer";
// import RewardsReducer from "./rewards_reducer";

export default combineReducers({
  session: SessionReducer
});

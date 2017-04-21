import { RECEIVE_CURRENT_USER } from "./../actions/session_actions";
import { merge } from "lodash";

const nullUser = {
  currentUser: null
};

const SessionReducer = (oldState = nullUser, action) => {
  Object.freeze(oldState);
  let newState;

  switch(action.type) {

    case RECEIVE_CURRENT_USER:
      newState = merge({}, oldState);
      newState.currentUser = action.user;
      return newState;

    default:
      return oldState;
  }
};

export default SessionReducer;

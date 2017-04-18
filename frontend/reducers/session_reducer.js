import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from "./../actions/session_actions";
import { merge } from "lodash";

const nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (oldState = nullUser, action) => {
  debugger
  Object.freeze(oldState);
  let newState;

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, oldState);
      newState.currentUser = action.user;
      return newState;

    case RECEIVE_ERRORS:
      newState = merge({}, oldState);
      newState.errors = action.errors;
      return newState;

    default:
      return oldState;
  }
};

export default SessionReducer;

import { RECEIVE_CURRENT_USER } from "./../actions/session_actions";
import { merge } from "lodash";

// The default state for the session slice of state will be
// an object with a currentUser property set to null.
const nullUser = {
  currentUser: null
};

// The state for a logged in user will include the user id,
// name and email as properties.
//
//  currentUser: {
//    id: 1,
//    name: "Boris Paskhaver"
//    email: "boris.paskhaver@nyu.edu",
//  }

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let newState;

  switch(action.type) {

    case RECEIVE_CURRENT_USER:
      newState = merge({}, state);
      newState.currentUser = action.user;
      return newState;

    default:
      return state;
  }
};

export default SessionReducer;

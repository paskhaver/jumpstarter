import { RECEIVE_ERRORS, CLEAR_ERRORS } from "./../actions/error_actions";
import { merge } from "lodash";

// The errors slice of state holds an array of strings,
// each one representing a separate error related to
// the current process or component. This errors slice
// is responsible for all error management across the app

// For CLEAR_ERRORS, the reducer returns an empty array
// This is usually done during component swaps

// For RECEIVE_ERRORS, the .concat() method returns a new array
// with all previous errors and the new ones. The new errors
// in action.errors will arrive in an array.

const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch(action.type) {

    case CLEAR_ERRORS:
      return [];

    case RECEIVE_ERRORS:
      return state.concat(action.errors);

    default:
      return state;
  }
};

export default ErrorsReducer;

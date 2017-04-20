import { RECEIVE_ERRORS, CLEAR_ERRORS } from "./../actions/error_actions";
import { merge } from "lodash";

const ErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_ERRORS:
      return oldState.concat(action.errors);

    case CLEAR_ERRORS:
      return [];

    default:
      return oldState;
  }
};

export default ErrorsReducer;

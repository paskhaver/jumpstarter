import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const receiveUserErrors = (errors) => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};


export const login = (user) => (dispatch) => {
  return SessionAPIUtil.login(user)
                       .then(
                            user => {
                              dispatch(receiveCurrentUser(user));
                            },

                            error => {
                             dispatch(receiveUserErrors(error.responseJSON));
                            }
                     );
};

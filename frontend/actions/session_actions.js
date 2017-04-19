import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveCurrentUser = (user) => {
  debugger
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
                       .then(currentUser => {
                              dispatch(receiveCurrentUser(currentUser));
                            },

                            errors => {
                             dispatch(receiveUserErrors(errors.responseJSON));
                            }
                     );
};

export const logout = () => (dispatch) => {
  return SessionAPIUtil.logout()
                       .then(loggedOutUser => {
                          dispatch(receiveCurrentUser(null));
                         },

                         errors => {
                          dispatch(receiveUserErrors(errors.responseJSON));
                         }
                       );
};

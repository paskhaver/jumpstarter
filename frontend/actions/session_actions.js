import * as SessionAPIUtil from "../util/session_api_util";
import { receiveErrors, clearErrors } from "./error_actions";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
// export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const login = (user) => (dispatch) => {
  return SessionAPIUtil.login(user)
                       .then(
                        (currentUser) => {
                          dispatch(receiveCurrentUser(currentUser));
                          dispatch(clearErrors());
                        },

                        (errors) => {
                          dispatch(receiveErrors(errors.responseJSON));
                        }
                     );
};

export const logout = () => (dispatch) => {
  return SessionAPIUtil.logout()
                       .then(
                         (loggedOutUser) => {
                          dispatch(receiveCurrentUser(null));
                          dispatch(clearErrors());
                         },

                         (errors) => {
                          dispatch(receiveUserErrors(errors.responseJSON));
                         }
                       );
};

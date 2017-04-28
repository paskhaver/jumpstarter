import * as SessionAPIUtil from "../util/session_api_util.js";
import { receiveErrors, clearErrors } from "./error_actions";
import { hashHistory } from 'react-router';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const login = (user) => (dispatch) => {
  return SessionAPIUtil.login(user)
                       .then(
                          currentUser => {
                            dispatch(receiveCurrentUser(currentUser));
                            return currentUser;
                          },

                          errors => {
                            dispatch(receiveErrors(errors.responseJSON));
                            return errors;
                          }
                        );

};

export const logout = () => (dispatch) => {
  return SessionAPIUtil.logout()
                       .then(loggedOutUser => {
                          return dispatch(receiveCurrentUser(null));
                         },

                         errors => {
                           dispatch(receiveErrors(errors.responseJSON));
                           return errors;
                         }
                       );
};

import * as UserAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";

export const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

export const createUser = (user) => (dispatch) => {
  return UserAPIUtil.createUser(user)
                    .then(newUser => {
                      dispatch(receiveCurrentUser(newUser));
                    });
};

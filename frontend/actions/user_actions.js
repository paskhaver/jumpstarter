import * as UserAPIUtil from "../util/session_api_util";
import { receiveCurrentUser } from "./session_actions";


export const createUser = (user) => (dispatch) => {
  return UserAPIUtil.createUser(user)
                    .then(newUser => {
                      dispatch(receiveCurrentUser(newUser));
                    });
};

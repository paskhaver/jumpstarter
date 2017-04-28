import * as UserAPIUtil from "../util/user_api_util";
import { receiveCurrentUser } from "./session_actions";
import { receiveErrors, clearErrors } from "./error_actions";


export const createUser = (user) => (dispatch) => {
  return UserAPIUtil.createUser(user)
                    .then(
                      newUser => {
                        dispatch(receiveCurrentUser(newUser));
                        dispatch(clearErrors());
                      },
                      errors =>  {
                        dispatch(receiveErrors(errors.responseJSON));
                      }
                    );
};

import * as CategoryAPIUtil from "./../util/category_api_util";
import { receiveErrors, clearErrors } from "./error_actions";

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export const receiveCategories = (categories) => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
};

export const fetchCategories = () => (dispatch) => {
  return CategoryAPIUtil.fetchCategories()
                        .then(
                          categories => {
                            dispatch(clearErrors());
                            dispatch(receiveCategories(categories));
                            return categories;
                          },

                          errors => {
                            dispatch(receiveErrors(errors));
                            return errors;
                          });
};

import { connect } from "react-redux";

import { login } from "./../../actions/session_actions";
import { createUser } from "./../../actions/user_actions";
import { receiveErrors, clearErrors } from "./../../actions/error_actions";

import SignUpForm from "./sign_up_form_component";

const mapStateToProps = (state) => {
  return {
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: newUser => { return dispatch(createUser(newUser)); },
    login: user => { return dispatch(login(user)); },
    receiveErrors: errors => { return dispatch(receiveErrors(errors)); },
    clearErrors: () => { return dispatch(clearErrors()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);

import { connect } from "react-redux";

import { login } from "../../actions/session_actions";
import { clearErrors, receiveErrors } from "../../actions/error_actions";

import LoginForm from "./login_form_component";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => { dispatch(login(user)); },
    clearErrors: () => { dispatch(clearErrors()); },
    receiveErrors: (errors) => { dispatch(receiveErrors(errors)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

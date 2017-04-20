import { connect } from "react-redux";
import CreateUserForm from "./create_user_form";
import { login } from "./../../actions/session_actions";
import { createUser } from "./../../actions/user_actions";
import { receiveErrors, clearErrors } from "./../../actions/error_actions";

const mapStateToProps = (state) => {
  return {
    errors: state.errors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (newUser) => { dispatch(createUser(newUser)); },
    login: (user) => { dispatch(login(user)); },
    receiveErrors: (errors) => { dispatch(receiveErrors(errors)); },
    clearErrors: () => { dispatch(clearErrors()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserForm);

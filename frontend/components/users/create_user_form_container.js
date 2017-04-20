import { connect } from "react-redux";
import CreateUserForm from "./create_user_form";
import { login } from "./../../actions/session_actions";
import { createUser } from "./../../actions/user_actions";

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (newUser) => { dispatch(createUser(newUser)); },
    login: (user) => { dispatch(login(user)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserForm);

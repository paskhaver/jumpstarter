import { connect } from "react-redux";
import CreateUserForm from "./create_user_form";
import { createUser } from "./../../actions/user_actions";

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (newUser) => { dispatch(createUser(newUser)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUserForm);

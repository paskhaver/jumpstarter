import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { clearErrors } from "./../../actions/error_actions";

import NavBar from "./navbar_component.jsx";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { return dispatch(logout()); },
    clearErrors: () => { return dispatch(clearErrors()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

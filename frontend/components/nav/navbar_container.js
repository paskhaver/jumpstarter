import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";

import NavBar from "./navbar_component";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => { return dispatch(logout()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

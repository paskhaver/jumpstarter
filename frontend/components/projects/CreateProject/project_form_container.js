import { connect } from "react-redux";
import { createProject } from "../../../actions/project_actions";
import { receiveErrors, clearErrors } from "../../../actions/error_actions";
import ProjectForm from "./project_form_component";

const mapStateToProps = state => ({ currentUser: state.session.currentUser });

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => { return dispatch(createProject(project)); },
    receiveErrors: errors => { return dispatch(receiveErrors(errors)); },
    clearErrors: () => { return dispatch(clearErrors()); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);

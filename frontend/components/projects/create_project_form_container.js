import { connect } from "react-redux";
import { createProject } from "../../actions/project_actions";
import { receiveErrors, clearErrors } from "../../actions/error_actions";
import CreateProjectForm from "./create_project_form";


const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => { return dispatch(createProject(project)); },
    receiveErrors: (errors) => { return dispatch(receiveErrors(errors)); },
    clearErrors: () => { return dispatch(clearErrors); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm);

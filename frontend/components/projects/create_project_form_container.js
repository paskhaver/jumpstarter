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
    createProject: (project) => { dispatch(createProject(project)); },
    receiveErrors: (errors) => { dispatch(receiveErrors(errors)); },
    clearErrors: () => { dispatch(clearErrors); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm);

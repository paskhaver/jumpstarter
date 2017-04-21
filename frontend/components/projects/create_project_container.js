import { connect } from "react-redux";
import CreateProject from "./create_project";
import { createProject } from "../../actions/project_actions";
import { receiveErrors, clearErrors } from "../../actions/error_actions";

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => { dispatch(createProject(project)); },
    receiveErrors: (errors) => { dispatch(receiveErrors(errors)); },
    clearErrors: () => { dispatch(clearErrors); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);

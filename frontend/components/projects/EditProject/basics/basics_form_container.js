import { connect } from "react-redux";
import { fetchProject } from "../../../../actions/project_actions";
import BasicsForm from "./basics_form_component";

const mapStateToProps = (state) => {
  return {
    
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: projectId => { return dispatch(fetchProject(projectId)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BasicsForm);

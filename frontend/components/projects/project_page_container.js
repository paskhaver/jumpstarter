import { connect } from "react-redux";
import ProjectPage from "./project_page";
import { fetchProject, updateProject, deleteProject } from "../../actions/project_actions";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    currentProject: state.project.currentProject
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (projectId) => { return dispatch(fetchProject(projectId)); },
    updateProject: (project) => { return dispatch(updateProject(project)); },
    deleteProject: (projectId) => { return dispatch(deleteProject(projectId)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);

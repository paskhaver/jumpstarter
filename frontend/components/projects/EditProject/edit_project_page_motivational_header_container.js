import  { connect } from "react-redux";
import EditProjectPageMotivationalHeader from "./edit_project_page_motivational_header_component";

const mapStateToProps = (state, ownProps) => {
  return {
    activeMenuItem: state.menu
  };
};

const mapDispatchToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectPageMotivationalHeader);

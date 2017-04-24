import  { connect } from "react-redux";
import EditProjectPageMainBox from "./edit_project_page_main_box";

const mapStateToProps = (state, ownProps) => {
  return {
    activeMenuItem: state.menu
  };
};

const mapDispatchToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectPageMainBox);

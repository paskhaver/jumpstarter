import { connect } from "react-redux";
import EditProjectPageMenu from "./edit_project_page_menu";
import { updateActiveMenuItem } from "../../../actions/menu_actions";

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateActiveMenuItem: (item) => { dispatch(updateActiveMenuItem(item)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProjectPageMenu);

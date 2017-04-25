import { connect } from "react-redux";
import Menu from "./menu_component";
import { updateActiveMenuItem } from "../../../../actions/menu_actions";

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateActiveMenuItem: (item) => { dispatch(updateActiveMenuItem(item)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

import  { connect } from "react-redux";
import MainBox from "./main_box_component";

const mapStateToProps = (state, ownProps) => {
  return {
    activeMenuItem: state.menu
  };
};

const mapDispatchToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBox);

import  { connect } from "react-redux";
import MotivationalHeader from "./motivational_header_component";

const mapStateToProps = (state, ownProps) => {
  return {
    activeMenuItem: state.menu
  };
};

const mapDispatchToProps = (state) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MotivationalHeader);

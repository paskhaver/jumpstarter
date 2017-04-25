import React from "react";
import { connect } from "react-redux";

class RewardItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

  }

}

const mapStateToProps = (state) => {
  return {
    rewards: state.project.currentProject.rewards
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RewardItem);

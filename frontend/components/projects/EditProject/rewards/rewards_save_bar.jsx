import React from "react";
import { connect } from "react-redux";
import { updateReward } from "./../../../../actions/reward_actions";

class RewardsSaveBar extends React.Component {

  // this.props.rewards      -- Passed in from parent AddRewardForm
  // this.props.updateReward -- Passed in from Redux store

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {

    event.preventDefault();
    for (let objectProp in this.props.rewards) {
      const reward = this.props.rewards[objectProp];
      this.props.updateReward(reward);
    }

  }

  render() {

    return (
      <div className="edit-project-page-save-bar">
        <div className="inner-container">
          <a>Discard changes</a>
          <button onClick={ this.handleSubmit }>Save</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateReward: reward => { return dispatch(updateReward(reward)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RewardsSaveBar);

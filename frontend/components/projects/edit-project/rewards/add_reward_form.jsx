import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getRewardsForProject } from "./../../../../actions/reward_actions";

import RewardBox from "./reward_box";
import RewardsSidebar from "./rewards-sidebar";

const mapStateToProps = state => {
  return { rewards: state.rewards };
};

const mapDispatchToProps = dispatch => ({
  getRewardsForProject: projectId => (dispatch(getRewardsForProject(projectId)))
});

class AddRewardForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { rewards: {} };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.rewards !== nextProps.rewards) {
      const { rewards } = nextProps;
      this.setState({ rewards });
    }
  }

  componentDidMount() {
    const { id } = this.props.params;
    this.props.getRewardsForProject(id)
        .then(rewards => { this.setState({ rewards }); });
  }

  createBoxesForExistingRewards() {
    const existingRewards = Object.values(this.state.rewards);

    return existingRewards.map((reward, idx) => {
      return <RewardBox key={idx}
                        reward={reward}
                        responsibility={"Update Reward"} />;
    });
  }

  createBoxesForNewRewards() {
    const project_id = this.props.params.id;
    const emptyReward = { project_id, title: "", description: "",
                          pledge_amount: "", max_backers: "",
                          delivery_date: ""};

    return [0, 1, 2].map(number => {
      return <RewardBox key={number}
                        reward={emptyReward}
                        responsibility={"Create Reward"}/>;
    });

  }

  render() {

    const existingRewards = this.createBoxesForExistingRewards();
    const newRewards      = this.createBoxesForNewRewards();

    return (
      <div>
        <div className="rewards-tab">

          <div className="rewards-header">
            <h2>Set your rewards and shipping costs.</h2>
            <p>Invite backers to be a part of the creative experience
               by offering rewards like a copy of what you’re making,
               a special experience, or a behind-the-scenes look into
               your process.</p>
          </div>

          <div className="rewards-form">
            <div className="rewards-main-content">
              <ul>
                {existingRewards}
                {newRewards}
              </ul>
            </div>
            <RewardsSidebar />
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddRewardForm));

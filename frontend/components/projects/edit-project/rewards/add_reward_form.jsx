import React from "react";
import { connect } from "react-redux";
import { getRewardsForProject } from "./../../../../actions/reward_actions";

import RewardBox from "./reward_box";
import RewardsSidebar from "./rewards-sidebar";

class AddRewardForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { rewards: {} };
  }

  componentDidMount() {

    const projectId = this.props.params.id;
    this.props.getRewardsForProject(projectId)
        .then(rewards => {
          this.setState({ rewards });
        });
  }

  render() {

    const existingRewards = Object.values(this.state.rewards).map((reward, idx) => {
      return <RewardBox key={idx}
                        reward={reward}
                        rewardNumber={idx + 1}
                        responsibility={"Update Reward"} />;
    });

    const project_id = this.props.params.id;
    const emptyReward = { project_id, title: "", description: "", pledge_amount: "", max_backers: "", delivery_date: ""};

    const nextRewardNumber = existingRewards.length + 1;
    const newRewardNumbers = [nextRewardNumber, nextRewardNumber + 1,nextRewardNumber + 2];
    const newRewards = newRewardNumbers.map(number => {
      return <RewardBox key={number}
                        reward={emptyReward}
                        rewardNumber={number}
                        responsibility={"Create Reward"}/>;
    });


    return (
      <div>
        <div className="rewards-tab">

          <div className="rewards-header">
            <h2>Set your rewards and shipping costs.</h2>
            <p>Invite backers to be a part of the creative experience by offering rewards like a copy of what you’re making, a special experience, or a behind-the-scenes look into your process.</p>
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

const mapStateToProps = (state) => {
  return {

  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    getRewardsForProject: (projectId) => {
      return dispatch(getRewardsForProject(projectId));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRewardForm);

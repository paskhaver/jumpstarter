import React from "react";
import RewardSidebarItem from "./reward_sidebar_item";

class RewardSidebarIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const rewardSidebarItems = this.props.rewards.map((reward, index) => {
      return <RewardSidebarItem key={index} reward={reward} />;
    });

    return (
        <ul className="reward-sidebar-list">
          {rewardSidebarItems}
        </ul>
    );
  }
}

export default RewardSidebarIndex;

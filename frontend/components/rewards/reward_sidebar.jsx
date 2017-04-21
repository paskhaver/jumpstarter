import React from "react";
import RewardSidebarItem from "./reward_sidebar_item";

class RewardSidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const rewardSidebarItems = this.props.rewards.map((reward, index) => {
      return <RewardSidebarItem key={index} reward={reward} />;
    });

    return (
        <ul>
          {rewardSidebarItems}
        </ul>
    );
  }
}

export default RewardSidebar;

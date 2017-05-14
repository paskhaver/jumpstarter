import React from "react";
import RewardSidebarItem from "./reward_sidebar_item";

class RewardSidebarIndex extends React.Component {
  constructor(props) {
    super(props);
    const { rewards } = props;
    this.state = { rewards };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.rewards !== nextProps.rewards) {
      const { rewards } = nextProps;
      this.setState({ rewards });
    }
  }

  generateRewardSidebarItems() {
    const { rewards } = this.state;
    return rewards.map((reward, index) => {
      return <RewardSidebarItem key={index} reward={reward} />;
    });
  }

  render() {
    return (
        <ul className="reward-sidebar-list">
          {this.generateRewardSidebarItems()}
        </ul>
    );
  }
}

export default RewardSidebarIndex;

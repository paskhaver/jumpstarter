import React from "react";

class RewardSidebarItem extends React.Component {

  // this.props.reward

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Pledge {this.props.reward.pledge_amount} or more</h2>
        <h3>{this.props.reward.title}</h3>

        <p>{this.props.reward.description}</p>
        <p>{this.props.reward.delivery_date}</p>
        <p>{this.props.reward.max_backers}</p>
      </div>
    );
  }
}

export default RewardSidebarItem;

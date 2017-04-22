import React from "react";

class RewardSidebarItem extends React.Component {

  // this.props.reward

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="reward-sidebar-list-item">
        <div className="pledge-info">
          <h2>Pledge ${this.props.reward.pledge_amount} or more</h2>
          <h3>{this.props.reward.title}</h3>

          <p>{this.props.reward.description}</p>

          <span className="estimated-delivery">
            Estimated Delivery
          </span>

          <span className="delivery-date">
            {this.props.reward.delivery_date}
          </span>

          <span className="pledge-limit">
            Limited (38 left of 40)
          </span>

          <span className="number-of-backers">
            {this.props.reward.max_backers} backers
          </span>
        </div>
      </li>
    );
  }
}

export default RewardSidebarItem;

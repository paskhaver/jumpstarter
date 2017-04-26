import React from "react";
import { connect } from "react-redux";
import { createPledge } from "./../../../util/pledge_api_util";
import { withRouter } from "react-router";

class RewardSidebarItem extends React.Component {

  // this.props.reward

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault()
    const user_id = this.props.currentUser.id;
    const project_id = this.props.params.id;
    const reward_id = this.props.reward.id;
    const pledge = { user_id, reward_id, project_id }
    createPledge(pledge);
  }

  render() {
    return (
      <li onClick={this.handleClick}
          className="reward-sidebar-list-item">
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
            Limited (_ left of {this.props.reward.max_backers})
          </span>


        </div>
      </li>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RewardSidebarItem));







//
// <span className="number-of-backers">
//   {this.props.reward.max_backers} backers
// </span>

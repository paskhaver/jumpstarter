import React from "react";
import { connect } from "react-redux";
import { createPledge } from "./../../../util/pledge_api_util";
import { receivePledge } from "./../../../actions/pledge_actions";

import { withRouter } from "react-router";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receivePledge: (pledge) => { return dispatch(receivePledge(pledge)); }
  };
};


class RewardSidebarItem extends React.Component {

  // this.props.reward

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    const user_id = this.props.currentUser.id;
    const project_id = this.props.params.id;
    const reward_id = this.props.reward.id;
    const pledge = { user_id, reward_id, project_id };
    createPledge(pledge);

    pledge.amount = this.props.reward.pledge_amount;
    this.props.receivePledge(pledge);
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
            Limited ({this.props.reward.max_backers - this.props.reward.pledge_count} left of {this.props.reward.max_backers})
          </span>


        </div>
      </li>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RewardSidebarItem));

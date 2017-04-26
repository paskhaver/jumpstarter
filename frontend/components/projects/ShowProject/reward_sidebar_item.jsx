import React from "react";
import { connect } from "react-redux";

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
            Limited (_ left of {this.props.reward.max_backers})
          </span>


        </div>
      </li>
    );
  }
}

export default RewardSidebarItem;

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => {

};








//
// <span className="number-of-backers">
//   {this.props.reward.max_backers} backers
// </span>

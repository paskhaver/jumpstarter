import React from "react";
import { connect } from "react-redux";
import { createReward, updateReward, deleteReward } from "./../../../../actions/reward_actions";
import { withRouter, hashHistory } from "react-router";

class RewardBox extends React.Component {
  // this.props.reward   --> From parent addRewardForm component
  // this.props.reward.id
  // this.props.reward.title
  // this.props.reward.pledge_amount
  // this.props.reward.description
  // this.props.reward.delivery_date
  // this.props.reward.max_backers
  // this.props.rewardNumber

  // this.props.updateReward(reward)

  constructor(props) {
    super(props);
    this.state = this.props.reward;

    this.handleEdit   = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault();
    const projectId = this.props.params.id;

    if (this.props.responsibility === "Update Reward") {
      this.props.updateReward(this.state)
                .then(() => {
                  hashHistory.push(`/projects/${projectId}`);
                });

    } else if (this.props.responsibility === "Create Reward") {
      this.props.createReward(this.state)
                .then(() => {
                  hashHistory.push(`/projects/${projectId}`);
                });
    }
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteReward(this.props.reward);
  }

  handleEdit(field) {
    return (event) => {
      this.setState({
        [field]: event.target.value
      });
    };
  }

  render() {

    return(
    <div className="edit-reward-box">

        <div className="edit-reward-number-box">
          <h3>Reward {this.props.rewardNumber}</h3>
        </div>

        <div className="edit-reward-info-box">

          <div className="edit-reward-row">
            <div className="reward-field">
              Title
            </div>

            <input value={this.state.title}
                   onChange={this.handleEdit("title")}/>

          </div>

          <div className="edit-reward-row">
            <div className="reward-field">
              Pledge Amount
            </div>

            <input value={this.state.pledge_amount}
                   onChange={this.handleEdit("pledge_amount")}/>

          </div>


          <div className="edit-reward-row">
            <div className="reward-field">
              Description
            </div>

            <textarea value={this.state.description}
                      onChange={this.handleEdit("description")}>

            </textarea>
          </div>

          <div className="edit-reward-row">
            <div className="reward-field">
              Estimated Delivery
            </div>

            <input value={this.state.delivery_date}
                   onChange={this.handleEdit("delivery_date")}/>
          </div>

          <div className="edit-reward-row">
            <div className="reward-field">
              Limit Availability
            </div>

            <input value={this.state.max_backers}
                   onChange={this.handleEdit("max_backers")} />
          </div>

          <div className="reward-button-row">

            <button className="reward-change-button"
                  onClick= {this.handleSubmit}>
            {this.props.responsibility}
            </button>

            <button className="reward-delete-button"
                    onClick= {this.handleDelete }>
              Delete Reward
            </button>
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
    createReward: reward => { return dispatch(createReward(reward)); },
    updateReward: reward => { return dispatch(updateReward(reward)); },
    deleteReward: reward => { return dispatch(deleteReward(reward)); }
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RewardBox));

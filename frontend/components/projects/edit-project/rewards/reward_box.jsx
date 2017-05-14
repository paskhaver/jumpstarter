import React from "react";
import { connect } from "react-redux";
import { createReward, updateReward, deleteReward } from "./../../../../actions/reward_actions";
import { withRouter, hashHistory } from "react-router";
import RewardField from "./reward-field";

const mapDispatchToProps = (dispatch) => {
  return {
    createReward: reward => { return dispatch(createReward(reward)); },
    updateReward: reward => { return dispatch(updateReward(reward)); },
    deleteReward: reward => { return dispatch(deleteReward(reward)); }
  };
};

class RewardBox extends React.Component {
  // this.props.reward   --> From parent addRewardForm component
  // this.props.reward.id
  // this.props.reward.title
  // this.props.reward.pledge_amount
  // this.props.reward.description
  // this.props.reward.delivery_date
  // this.props.reward.max_backers

  // this.props.updateReward(reward)

  constructor(props) {
    super(props);
    this.state = this.props.reward;
    this.handleEdit   = this.handleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const projectId = this.props.reward.project_id;
    const { responsibility } = this.props;
    // const projectId = this.props.params.id;

    if (responsibility === "Update Reward") {
      this.props.updateReward(this.state)
                .then(updatedReward => { hashHistory.push(`/projects/${projectId}`); });
    } else if (responsibility === "Create Reward") {
      this.props.createReward(this.state)
                .then(newReward => { hashHistory.push(`/projects/${projectId}`); });
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

    const { title, pledge_amount, description,
            delivery_date, max_backers } = this.state;

    return(
    <div className="edit-reward-box">

        <div className="edit-reward-number-box">
          <h3>Reward</h3>
        </div>

        <div className="edit-reward-info-box">

          <div className="edit-reward-row">
            <RewardField text={"Title"} />
            <input value={title} onChange={this.handleEdit("title")}/>
          </div>

          <div className="edit-reward-row">
            <RewardField text={"Pledge Amount"} />
            <input value={pledge_amount} onChange={this.handleEdit("pledge_amount")}/>
          </div>

          <div className="edit-reward-row">
            <RewardField text={"Description"} />
            <textarea value={description} onChange={this.handleEdit("description")}></textarea>
          </div>

          <div className="edit-reward-row">
            <RewardField text={"Estimated Delivery"} />
            <input value={delivery_date} onChange={this.handleEdit("delivery_date")}/>
          </div>

          <div className="edit-reward-row">
            <RewardField text={"Limit Availability"} />
            <input value={max_backers} onChange={this.handleEdit("max_backers")} />
          </div>

          <div className="reward-button-row">
            <button className="reward-change-button" onClick= {this.handleSubmit}>
              {this.props.responsibility}
            </button>

            <button className="reward-delete-button" onClick= {this.handleDelete }>
              Delete Reward
            </button>
          </div>

        </div>
      </div>
    );
  }
}



export default withRouter(connect(null, mapDispatchToProps)(RewardBox));

import React from "react";

class RewardBox extends React.Component {
  // this.props.reward
  // this.props.reward.id
  // this.props.reward.title
  // this.props.reward.pledge_amount
  // this.props.reward.description
  // this.props.reward.delivery_date
  // this.props.reward.max_backers
  // this.props.rewardNumber

  constructor(props) {
    super(props);
    this.state = this.props.reward;
    this.handleEdit = this.handleEdit.bind(this);
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

        <div className="edit-reward-number">
          <h3>Reward {this.props.rewardNumber}</h3>
        </div>

        <div className="edit-reward-info">
          <div className="edit-reward-row">
            <p>
              Title
            </p>

            <input value={this.state.title}
                   onChange={this.handleEdit("title")}/>


          </div>

          <div className="edit-reward-row">
            <p>
              Pledge Amount
            </p>

            <input value={this.state.pledge_amount}
                   onChange={this.handleEdit("pledge_amount")}/>

          </div>


          <div className="edit-reward-row">
            <p>
              Description
            </p>

            <textarea value={this.state.description}
                      onChange={this.handleEdit("description")}>

            </textarea>
          </div>

          <div className="edit-reward-row">
            <p>
              Estimated Delivery
            </p>

            <input value={this.state.delivery_date}
                   onChange={this.handleEdit("delivery_date")}/>
          </div>

          <div className="edit-reward-row">
            <p>
              Limit Availability
            </p>

            <input value={this.state.max_backers}
                   onChange={this.handleEdit("max_backers")} />
          </div>

        </div>

      </div>
    );
  }

}

export default RewardBox;

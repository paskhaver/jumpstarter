import React from "react";

class AddRewardForm extends React.Component {

  constructor(props) {
    super(props);
    this.setState({
      title: "", pledge_amount: "", description: "",
      delivery_date: "", limit_availability: ""
    });
  }

  render() {
    return (
      <div className="add-reward-form">
        <div className="row">
          <label>Title</label>
          <input type="text"></input>
        </div>

        <div className="row">
          <label>Pledge amount</label>
          <input type="text"></input>
        </div>

        <div className="row">
          <label>Description</label>
          <textarea></textarea>
        </div>

        <div className="row">
          <label>Estimated delivery</label>
          <input type="date"></input>
        </div>

        <div className="row">
          <label>Shipping details</label>
          <input></input>
        </div>

        <div className="row">
          <label>Limit availability</label>
          <input></input>
        </div>

      </div>
    );
  }


}

export default AddRewardForm;

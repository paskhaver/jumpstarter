import React from "react";
import { connect } from "react-redux";
import SaveBar from "./../mainPage/save_bar";

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
      <div>
        <div className="rewards-form">

          <div className="rewards-header">
            <h2>Set your rewards and shipping costs.</h2>
            <p>Invite backers to be a part of the creative experience by offering rewards like a copy of what you’re making, a special experience, or a behind-the-scenes look into your process.</p>
          </div>

        </div>


        <SaveBar project={this.state} />
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

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRewardForm);

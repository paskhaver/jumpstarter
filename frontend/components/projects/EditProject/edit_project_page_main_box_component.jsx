import React from "react";
import AddRewardFormComponent from "./rewards/add_reward_form_component";

class EditProjectPageMainBox extends React.Component {

  // this.props.activeMenuItem -- Coming from store
  // this.props.box            -- Coming from parent background component

  constructor(props) {
    super(props);
  }

  render() {
    let className = "edit-project-page-main-box-hidden";
    if (this.props.activeMenuItem === this.props.box) {
      className = "edit-project-page-main-box-visible";
    }

    return (
      <div className={className}>
          <h1>Box For:  {this.props.box}</h1>

      </div>
    );
  }

}

export default EditProjectPageMainBox;

// <AddRewardFormComponent />

import React from "react";
import { connect } from "react-redux";
import { updateProject } from "./../../../../actions/project_actions";

class RewardsSaveBar extends React.Component {

  // this.props.project
  // this.props.updateProject

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit() {

  }

  render() {

    return (
      <div className="edit-project-page-save-bar">
        <div className="inner-container">
          <a>Discard changes</a>
          <button onClick={ this.handleSubmit }>Save</button>
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
    updateProject: (project) => { dispatch(updateProject(project)); }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveBar);

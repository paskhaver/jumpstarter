import React from "react";
import { connect } from "react-redux";
import { updateProject } from "./../../../../actions/project_actions";
import { hashHistory } from "react-router";

const mapDispatchToProps = dispatch => {
  return {
    updateProject: project => { return dispatch(updateProject(project)); }
  };
};

class SaveBar extends React.Component {

  // this.props.project  --> Passed from parent BasicsForm component

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const { project } = this.props;
    const id = project.id;

    this.props.updateProject(project)
              .then(updatedProject => {
                hashHistory.push(`/projects/${id}`);
              });
  }

  render() {
    return (
      <div className="edit-project-page-save-bar">
        <div className="save-bar-inner-container">
          <button onClick={ this.handleSubmit }>Save</button>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(SaveBar);

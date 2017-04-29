import React from "react";
import { connect } from "react-redux";
import { updateProject } from "./../../../../actions/project_actions";
import { hashHistory } from "react-router";

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateProject: (project) => { return dispatch(updateProject(project)); }
  };
};

class SaveBar extends React.Component {

  // this.props.project  --> Passed form parent BasicsForm component

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const project = this.props.project;
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
          <a>Discard changes</a>
          <button onClick={ this.handleSubmit }>Save</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveBar);

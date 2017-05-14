import React from "react";
import { connect } from "react-redux";
import { withRouter, hashHistory } from "react-router";
import { editProject, fetchProject } from "./../../../util/project_api_util";
import { clearErrors, receiveErrors } from "./../../../actions/error_actions";

import Menu from "./menu";

const mapStateToProps = (state) => ({currentUserId: state.session.currentUser.id});
const mapDispatchToProps = (dispatch) => {
  return {
    receiveErrors: errors => { return dispatch(receiveErrors(errors)); },
    clearErrors: () => { return dispatch(clearErrors()); }
  };
};

class EditProjectPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Basics"
    };
  }

  componentWillMount() {
    const projectId = this.props.params.id;
    const creatorId = editProject(projectId)
                      .then(creator => {
                        if (creator.creator_id !== this.props.currentUserId) {
                          this.props.clearErrors();
                          this.props.receiveErrors(["Not your project! Hands off!"]);
                          hashHistory.push("/start");
                        }
                      });
  }

  render() {

    return (
      <div className="edit-project-page-background">
        <Menu />
          { this.props.children}
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditProjectPage));

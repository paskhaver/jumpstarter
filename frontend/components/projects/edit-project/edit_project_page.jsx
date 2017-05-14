import React from "react";
import { connect } from "react-redux";
import { withRouter, hashHistory } from "react-router";
import { editProject } from "./../../../util/project_api_util";
import { clearErrors, receiveErrors } from "./../../../actions/error_actions";

import Menu from "./menu";

const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUser.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => { return dispatch(clearErrors()); },
    receiveErrors: errors => { return dispatch(receiveErrors(errors)); }
  };
};

class EditProjectPage extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const projectId = this.props.params.id;
    const { currentUserId } = this.props;

    const creatorId = editProject(projectId)
                      .then(data => {
                        if (data.creator_id !== currentUserId) {
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

import React from "react";
import { connect } from "react-redux";
import { Link, hashHistory } from 'react-router';
import { fetchProject } from "../../../actions/project_actions";

import YouTube from "react-youtube";
import RewardSidebarIndex from "./reward_sidebar_index";
import moment from "moment";

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    project: state.project,
    rewards: state.rewards
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProject: (projectId) => { return dispatch(fetchProject(projectId)); },
  };
};


class ProjectPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.handleRedirectToEdit = this.handleRedirectToEdit.bind(this);
  }

  componentWillReceiveProps(nextProps) {

    if (this.props.params.id !== nextProps.params.id) {
      const projectId = nextProps.params.id;
      this.props.fetchProject(projectId)
                .then(project => {
                  this.setState(project);
                });
    }
    // else {
    //   this.setState(this.props.project);
    // }
  }

  componentDidMount() {
    const projectId = this.props.params.id;
    this.props.fetchProject(projectId)
              .then(project => {
                this.setState({ loading: false });
              });
  }

  handleRedirectToEdit(event) {
    event.preventDefault();
    const projectId = this.props.project.id;
    hashHistory.push(`/projects/${projectId}/edit/basics`);
  }

  videoOptions() {
    const videoOptions = {
        height: "100%",
        width: "100%",
        playerVars: {
          autoplay: 0
        }
      };

    return videoOptions;

  }

  render() {

    if (this.props.children) {
      return this.props.children;
    }

    if (this.state.loading) {
      return (
        <div className="cssload-tetrominos">
        	<div className="cssload-tetromino cssload-box1"></div>
        	<div className="cssload-tetromino cssload-box2"></div>
        	<div className="cssload-tetromino cssload-box3"></div>
        	<div className="cssload-tetromino cssload-box4"></div>
        </div>
      );
    }

    const endDateMoment = moment(this.props.project.end_date);
    const remainingDays = endDateMoment.diff(moment(), "days") || 0;

    // editButton only appears if the project creator is the current user
    const editButton = this.props.currentUser.id === this.props.project.creator_id ?
                       (<button onClick={ this.handleRedirectToEdit }>Edit This Project</button>) :
                       "";

    return (

      <div className="project-page">
        <div className="above-the-fold">

          <header className="header">
            <div className="creator-info">
              <div className="creator-image"></div>
              <span>By {this.props.project.creator_name}</span>
            </div>

            <div className="project-title">
              <h2>{this.props.project.title}</h2>
              <p>{this.props.project.blurb}</p>
            </div>
          </header>

          <div className="primary-info">
            <div className="project-page-video">
              <YouTube
                videoId="MXKEccRiMeQ"
                onEnd={event => { event.target.pauseVideo(); }}
                opts={this.videoOptions()}
              />
            </div>

            <div className="fundraising-box">
              <span className="pledge-amount">${this.props.project.amount_raised || 0}</span>
              <span className="statistic-category">pledged of ${this.props.project.funding_goal || 0} goal</span>

              <span className="statistic">{this.props.project.number_of_backers || 0}</span>
              <span className="statistic-category">backers</span>

              <span className="statistic">{remainingDays}</span>
              <span className="statistic-category">days to go</span>

              <button>Back this Project</button>
              {editButton}

              <div className="social-stuff">
                <div className="social-button">Remind Me</div>
                <div className="social-button">Share</div>
              </div>

              <p>
                All or nothing. This project will only be funded if it
                reaches its goal by {this.props.project.end_date}.
              </p>

            </div>
          </div>
        </div>

        <div className="white-box">
          <div className="below-the-fold">

            <div className="description-container">
              <h3>About this Project</h3>

              <p>{this.props.project.description}
              </p>
            </div>

            <div className="pledge-container">
              <h3>Support this Project</h3>

            <RewardSidebarIndex rewards={this.props.rewards}/>
            </div>

          </div>
        </div>
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPage);

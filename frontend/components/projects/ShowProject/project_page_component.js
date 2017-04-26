import React from "react";
import { Link, hashHistory } from 'react-router';
import YouTube from "react-youtube";
import RewardSidebarIndex from "./reward_sidebar_index";

class ProjectPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  // Semi-functional --- seems to be forcing a refresh
  // on occasional new project fetches

  componentWillReceiveProps(nextProps) {
    if (this.props.params.id !== nextProps.params.id) {

      const projectId = nextProps.params.id;
      this.props.fetchProject(projectId)
                .then(() => {
                  const { title, category, residence, blurb } = this.props.currentProject;
                  this.setState({ title, category, residence, blurb});
                });
    }
  }

  componentDidMount() {
    const projectId = this.props.params.id;
    const project   = this.props.fetchProject(projectId);

    project.then(() => {
      const { title, category, residence, blurb, funding_goal,
              description, amount_raised, number_of_backers } = this.props.currentProject;
      this.setState({ title, category, residence, blurb, funding_goal,
        description, amount_raised, number_of_backers });
    });
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
    let rewards;
    if (this.props.currentProject) {
      rewards = this.props.currentProject.rewards;
    } else {
      rewards = [];
    }

    if (this.props.children) {
      return this.props.children;
    }

    return (

      <div className="project-page">
        <div className="above-the-fold">

          <header className="header">
            <div className="creator-info">
              <div className="creator-image"></div>
              <span>By Boris Paskhaver</span>
            </div>

            <div className="project-title">
              <h2>{this.state.title}</h2>
              <p>{this.state.blurb}</p>
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
              <span className="pledge-amount">${this.state.amount_raised}</span>
              <span className="statistic-category">pledged of ${this.state.funding_goal} goal</span>

              <span className="statistic">333</span>
              <span className="statistic-category">backers</span>

              <span className="statistic">36</span>
              <span className="statistic-category">days to go</span>

              <button>Back this Project</button>

              <div className="social-stuff">
                <div className="social-button">Remind Me</div>
                <div className="social-button">Share</div>
              </div>

              <p>
                All or nothing. This project will only be funded if it
                reaches its goal by Sun, May 28 2017 10:00 AM EDT.
              </p>

            </div>
          </div>
        </div>

        <div className="white-box">
          <div className="below-the-fold">

            <div className="description-container">
              <h3>About this Project</h3>

              <img src="https://ksr-ugc.imgix.net/assets/015/923/025/f35112cea6b5a8a216cdf13913937125_original.jpg?w=680&fit=max&v=1489943369&auto=format&q=92&s=37d4107b35e1a49c809cf34f4c745241" />

              <p>{this.state.description}
              </p>
            </div>

            <div className="pledge-container">
              <h3>Support this Project</h3>

            <RewardSidebarIndex rewards={rewards}/>
            </div>

          </div>
        </div>
      </div>
    );
  }

}

export default ProjectPage;

import React from "react";
import { hashHistory } from 'react-router';
import YouTube from "react-youtube";

class ProjectPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
  }

  // Functional but always one page behind --- not actually
  // loading the currently requested URL Page

  // componentWillReceiveProps(nextProps) {
  //
  //   if (this.props.params.id != nextProps.params.id) {
  //     const projectId = this.props.params.id;
  //     const project = this.props.fetchProject(projectId);
  //
  //     project.then(() => {
  //        const { title, category, residence, blurb } = this.props.currentProject;
  //       this.setState({ title });
  //     });
  //   }
  // }

  componentDidMount() {
    const projectId = this.props.params.id;
    const project = this.props.fetchProject(projectId);

    project.then(() => {
      const { title, category, residence, blurb } = this.props.currentProject;
      this.setState({ title, category, residence, blurb });
    });

              // .then(project => {
              //   const { title, category, residence, blurb,
              //   end_date, funding_goal, description } = project;
              //
              //   this.setState({title, category, residence, blurb,
              //     end_date, funding_goal, description
              //   });
              // });
  }

  render() {

    const videoOptions = {
        height: "100%",
        width: "100%",
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 0
        }
      };

    return (
      <div className="project-page">

        <header className="header">
          <div className="creator-info">

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
              opts={videoOptions}
            />
          </div>

          <div className="fundraising-box">
            <span className="pledge-amount">$59,094</span>
            <span className="statistic-category">pledged of $100,000 goal</span>

            <span className="statistic">333</span>
            <span className="statistic-category">backers</span>

            <span className="statistic">36</span>
            <span className="statistic-category">days to go</span>
          </div>
        </div>

        <div className="category-and-residency-info">

        </div>

        <div className="description-container">

        </div>

        <div className="pledge-container">

        </div>
      </div>
    );
  }

}

export default ProjectPage;

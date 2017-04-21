import React from "react";
import { hashHistory } from 'react-router';

class ProjectPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Project Page"
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
      this.setState({ title });
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
    return (
      <div className="project-page">
        <div className="project-page-video">
          <h1>{this.state.title}</h1>
        </div>

        <div className="fundraising-box">

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

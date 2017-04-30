import React from "react";
import { withRouter, Link } from "react-router";
import { connect } from "react-redux";
import { fetchCategoryProjects } from "./../../../actions/category_projects_actions";

const mapStateToProps = (state) => {
  return {
    projects: state.categoryProjects
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategoryProjects: (category) => (dispatch(fetchCategoryProjects(category)))
  };
};

class CategoryPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.params.category !== nextProps.params.category) {
      this.setState({ loading: true });
      const nextCategory = nextProps.params.category;
      this.props.fetchCategoryProjects(nextCategory)
                .then(projects => {
                  this.setState({ loading: false });
                });
    }
  }

  componentDidMount() {
    const category = this.props.params.category;
    this.props.fetchCategoryProjects(category)
              .then(projects => {
                this.setState({ loading: false });
              });
  }

  render() {

    const projectItems = this.props.projects.map((project, idx) => {
      return (
        <div className="category-project"
             key={idx}>
          <Link to={`/projects/${project.id}`}>{project.title}</Link>
          <p className="byline-blurb">{project.creator}</p>
          <p className="byline-blurb">{project.blurb}</p>
          <progress value={project.percent_funded} max="100"></progress>
        </div>
      );
    });

    return (
      <div className="category-page">
        {projectItems}
      </div>
    );
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryPage));

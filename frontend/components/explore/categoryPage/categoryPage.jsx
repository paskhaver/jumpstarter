import React from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { fetchCategoryProjects } from "./../../../actions/category_projects_actions";

const mapStateToProps = (state) => {
  return {

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

  componentDidMount() {
    debugger
    const category = this.props.params.category;
    this.props.fetchCategoryProjects(category)
              .then(projects => {
                this.setState({ loading: false });
              });
  }

  render() {
    debugger;
    return (
      <div>Category Page</div>
    );
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryPage));

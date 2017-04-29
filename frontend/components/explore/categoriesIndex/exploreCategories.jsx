import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router";

import AJAXLoader from "./../../ajax-loader/ajax_loader";
import Footer from "./../../footer/footer";

import { fetchCategories } from "./../../../actions/category_actions";

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCategories: () => { return dispatch(fetchCategories()); }
  };
};

class ExploreCategories extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.props.fetchCategories()
              .then(categories => {
                this.setState({ loading: false });
              });
  }

  render() {
    if (this.state.loading) {
      return <AJAXLoader />;
    }

    const categoryItems = this.props.categories.map(category => {
      return (<li key={category}>
                <Link to={`/explore/${category}`}>{category}</Link>
              </li>);
    });

    return(
      <div>
        <div className="explore-categories">
          <div className="categories-inner-container">
            <h1>Categories</h1>
            <ul>
              {categoryItems}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreCategories);

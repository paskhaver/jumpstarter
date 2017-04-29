import React from "react";
import { connect } from "react-redux";

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

    debugger
    const categoryItems = this.props.categories.map(category => {
      return (<li key={category}>{category}</li>);
    });

    return(
      <div>
        <div className="explore-categories">
          <ul>
            {categoryItems}
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreCategories);

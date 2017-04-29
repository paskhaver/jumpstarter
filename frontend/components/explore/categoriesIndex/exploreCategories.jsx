import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({ categories: state.categories });
const mapDispatchToProps = (dispatch) => ({});

class ExploreCategories extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        Explore Categories Container
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreCategories);

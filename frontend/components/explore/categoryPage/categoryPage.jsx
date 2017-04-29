import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {

  };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

class CategoryPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>Category Page</div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);

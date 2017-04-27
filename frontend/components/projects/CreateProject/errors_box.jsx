import React from "react";
import { connect } from "react-redux";

class ErrorsBox extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    if (this.props.errors.length === 0) {
      return (
        <ul></ul>
      )
    }

    const errorItems = this.props.errors.map((error, idx) => {
      return <li key={idx}>{error}</li>
    });

    return (

      <ul className="create-project-errors-box">
        {errorItems}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errors: state.errors
  }
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorsBox);

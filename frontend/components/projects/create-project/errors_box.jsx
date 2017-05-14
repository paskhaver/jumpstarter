import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({ errors: state.errors });

class ErrorsBox extends React.Component {

  constructor(props) {
    super(props);
  }

  noErrors() {
    return this.props.errors.length === 0;
  }

  generateErrorItems() {
    const { errors } = this.props;
    return errors.map((error, idx) => {
      return (
        <li key={idx}>{error}</li>
      );
    });
  }

  render() {
    if(this.noErrors()) {
      return (<ul></ul>);
    }

    const errorItems = this.generateErrorItems();
    return (
      <ul className="create-project-errors-box">
        {errorItems}
      </ul>
    );
  }
}

export default connect(mapStateToProps)(ErrorsBox);

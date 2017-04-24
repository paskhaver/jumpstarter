import React from "react";

class EditProjectPageMainBox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="edit-project-page-main-box-visible">
          <h1>Box For:  {this.props.box}</h1>
      </div>
    );
  }

}

export default EditProjectPageMainBox;

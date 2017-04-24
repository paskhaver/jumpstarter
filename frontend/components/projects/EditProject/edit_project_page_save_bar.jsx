import React from "react";

class EditProjectPageSaveBar extends React.Component {

  // this.props.name

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="edit-project-page-save-bar">
        <div className="inner-container">
          <a>Discard changes</a>
          <button>Save</button>
        </div>
      </div>
    );
  }
}

export default EditProjectPageSaveBar;

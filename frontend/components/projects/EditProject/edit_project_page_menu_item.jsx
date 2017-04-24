import React from "react";

class EditProjectPageMenuItem extends React.Component {

  // this.props.name

  constructor(props) {
    super(props);
  }

  render() {

    const bonusText = this.props.bonusText ? this.props.bonusText : "";

    return (
      <li className="edit-project-page-menu-item">
        { this.props.name }
        { bonusText }
      </li>
    );
  }
}

export default EditProjectPageMenuItem;

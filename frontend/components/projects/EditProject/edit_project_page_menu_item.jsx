import React from "react";
import { Link } from "react-router";

class EditProjectPageMenuItem extends React.Component {

  // this.props.name

  constructor(props) {
    super(props);
  }

  render() {

    const bonusText = this.props.bonusText ? this.props.bonusText : "";
    const checkIcon = this.props.checkIcon ?
                      (<i className="fa fa-check" aria-hidden="true"></i>) :
                      "";

    return (
      <li className="edit-project-page-menu-item">
        { checkIcon }
        <Link to={this.props.url}>{ this.props.name }</Link>
      </li>
    );
  }
}

export default EditProjectPageMenuItem;

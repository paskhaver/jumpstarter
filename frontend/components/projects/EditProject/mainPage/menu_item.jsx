import React from "react";
import { Link } from "react-router";

class MenuItem extends React.Component {

  // this.props.name
  // this.props.handleMenuItemClick

  constructor(props) {
    super(props);
    this.handleMenuItemClick =  this.handleMenuItemClick.bind(this);
  }

  handleMenuItemClick(event) {
    event.preventDefault();
    const itemName = this.props.name;
    this.props.handleMenuItemClick(itemName);
  }

  render() {

    const bonusText = this.props.bonusText ? this.props.bonusText : "";
    const checkIcon = this.props.checkIcon ? (<i className="fa fa-check" aria-hidden="true"></i>) : "";

    return (
      <li className="edit-project-page-menu-item"
          onClick={ this.handleMenuItemClick }>
        { checkIcon }
        { this.props.name }
      </li>
    );
  }
}

export default MenuItem;

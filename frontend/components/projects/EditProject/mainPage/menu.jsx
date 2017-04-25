import React from "react";
import { Link } from "react-router";

import BasicsForm from "./../basics/basics_form_component";

import { withRouter, hashHistory } from "react-router";

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const currentPath = this.props.location.pathname;

    return (
      <nav className="edit-project-page-menu">
        <ul className="edit-project-page-menu-ul">
          <li className="edit-project-page-menu-item">
            <Link to={`${currentPath}/basics`}>Basics</Link>
          </li>

          <li className="edit-project-page-menu-item">
            <Link to={`${currentPath}/rewards`}>Rewards</Link>
          </li>

          <li className="edit-project-page-menu-item">
            <Link to={`${currentPath}/story`}>Story</Link>
          </li>

          <li className="edit-project-page-menu-item">
            <Link to={`${currentPath}/about-you`}>About you</Link>
          </li>

          <li className="edit-project-page-menu-item">
            <Link to={`${currentPath}/account`}>Account</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Menu);


// <MenuItem
//   name={"Basics"}
//   checkIcon={true}
//   handleMenuItemClick={ this.handleMenuItemClick }/>
//
// <MenuItem
//   name={"Rewards"}
//   checkIcon={true}
//   handleMenuItemClick={ this.handleMenuItemClick }/>
//
// <MenuItem
//   name={"Story"}
//   checkIcon={true}
//   handleMenuItemClick = { this.handleMenuItemClick }/>
//
// <MenuItem
//   name={"About you"}
//   checkIcon={true}
//   handleMenuItemClick = { this.handleMenuItemClick } />
//
// <MenuItem
//   name={"Account"}
//   checkIcon={true}
//   handleMenuItemClick = { this.handleMenuItemClick } />


// <ul className="edit-project-page-menu-ul">
//   <MenuItem url="preview" name={"Preview"} checkIcon={false} />
// </ul>
//
// <ul className="edit-project-page-menu-ul">
//   <MenuItem url="submit"
//                            name={"Submit for review"}
//                            checkIcon={false}
//                            bonusText={"Allow up to 3 business days"}/>
// </ul>

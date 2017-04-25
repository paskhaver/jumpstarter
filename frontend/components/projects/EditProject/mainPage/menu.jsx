import React from "react";
import { Link } from "react-router";

import BasicsForm from "./../basics/basics_form_component";

import { withRouter, hashHistory } from "react-router";

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const projectId = this.props.params.id;
    const basicsURL = `/projects/${projectId}/edit/basics`;
    const rewardsURL = `/projects/${projectId}/edit/rewards`;

    return (
      <nav className="edit-project-page-menu">
        <ul className="edit-project-page-menu-ul">
          <li className="edit-project-page-menu-item">
            <Link to={basicsURL}>Basics</Link>
          </li>

          <li className="edit-project-page-menu-item">
            <Link to={rewardsURL}>Rewards</Link>
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

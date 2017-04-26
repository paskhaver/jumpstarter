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
    const previewURL = `/projects/${projectId}`;

    return (
      <nav className="edit-project-page-menu">
        <ul className="edit-project-page-menu-ul">
          
          <li className="edit-project-page-menu-item">
            <Link to={basicsURL}>Basics</Link>
          </li>

          <li className="edit-project-page-menu-item">
            <Link to={rewardsURL}>Rewards</Link>
          </li>

          <li className="edit-project-page-menu-item">
            <Link to={previewURL}>View Project</Link>
          </li>

        </ul>
      </nav>
    );
  }
}

export default withRouter(Menu);

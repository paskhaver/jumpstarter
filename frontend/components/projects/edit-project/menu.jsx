import React from "react";
import { withRouter } from "react-router";
import MenuListItem from "./menu-list-item";

function Menu(props) {

  const projectId  = props.params.id;
  const previewURL = `/projects/${projectId}`;
  const basicsURL  = `${previewURL}/edit/basics`;
  const rewardsURL = `${previewURL}/edit/rewards`;

  return (
    <nav className="edit-project-page-menu">
      <ul className="edit-project-page-menu-ul">
        <MenuListItem url={basicsURL} text={"Basics"} />
        <MenuListItem url={rewardsURL} text={"Rewards"} />
        <MenuListItem url={previewURL} text={"View Projects"} />
      </ul>
    </nav>
  );

}

export default withRouter(Menu);

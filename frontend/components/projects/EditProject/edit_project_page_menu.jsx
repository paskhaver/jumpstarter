import React from "react";
import EditProjectPageMenuItem from "./edit_project_page_menu_item";

class EditProjectPageMenu extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="edit-project-page-menu">
        <ul className="edit-project-page-menu-ul">
          <EditProjectPageMenuItem name={"Basics"} />
          <EditProjectPageMenuItem name={"Rewards"} />
          <EditProjectPageMenuItem name={"Story"} />
          <EditProjectPageMenuItem name={"About You"} />
          <EditProjectPageMenuItem name={"Account"} />
        </ul>

        <ul className="edit-project-page-menu-ul">
          <EditProjectPageMenuItem name={"Preview"} />
        </ul>

        <ul className="edit-project-page-menu-ul">
          <EditProjectPageMenuItem name={"Submit for review"}
                                   bonusText={"Allow up to 3 business days"}/>
        </ul>
      </nav>
    );
  }
}

export default EditProjectPageMenu;

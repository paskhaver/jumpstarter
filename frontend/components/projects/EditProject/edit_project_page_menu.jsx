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
          <EditProjectPageMenuItem url="basics" name={"Basics"} checkIcon={true} />
          <EditProjectPageMenuItem url="rewards" name={"Rewards"} checkIcon={true} />
          <EditProjectPageMenuItem url="story" name={"Story"} checkIcon={true} />
          <EditProjectPageMenuItem url="about-you" name={"About you"} checkIcon={true} />
          <EditProjectPageMenuItem url="account" name={"Account"} checkIcon={true} />
        </ul>

        <ul className="edit-project-page-menu-ul">
          <EditProjectPageMenuItem url="preview" name={"Preview"} checkIcon={false} />
        </ul>

        <ul className="edit-project-page-menu-ul">
          <EditProjectPageMenuItem url="submit"
                                   name={"Submit for review"}
                                   checkIcon={false}
                                   bonusText={"Allow up to 3 business days"}/>
        </ul>
      </nav>
    );
  }
}

export default EditProjectPageMenu;

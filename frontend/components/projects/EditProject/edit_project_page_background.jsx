import React from "react";
import EditProjectPageMenuContainer from "./edit_project_page_menu_container";
import EditProjectPageMotivationalHeader from "./edit_project_page_motivational_header";
import EditProjectPageMainBoxContainer from "./edit_project_page_main_box_container";
import EditProjectPageSaveBar from "./edit_project_page_save_bar";

class EditProjectPageBackground extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Basics"
    };
  }

  render() {
    return (
      <div className="edit-project-page-background">
        <EditProjectPageMenuContainer />
        <EditProjectPageMotivationalHeader />

        <EditProjectPageMainBoxContainer box={"Basics"} />
        <EditProjectPageMainBoxContainer box={"Story"} />
        <EditProjectPageMainBoxContainer box={"Rewards"} />
        <EditProjectPageMainBoxContainer box={"About you"}/>
        <EditProjectPageMainBoxContainer box={"Account"} />

        <EditProjectPageSaveBar />
      </div>
    );
  }

}

export default EditProjectPageBackground;

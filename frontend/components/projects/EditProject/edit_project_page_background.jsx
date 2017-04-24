import React from "react";
import EditProjectPageMenuContainer from "./edit_project_page_menu_container";
import EditProjectPageMotivationalHeader from "./edit_project_page_motivational_header";
import EditProjectPageMainBox from "./edit_project_page_main_box";
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

        <EditProjectPageMainBox box={"Basics"} />
        <EditProjectPageMainBox box={"Story"} />
        <EditProjectPageMainBox box={"Rewards"} />
        <EditProjectPageMainBox box={"About you"}/>
        <EditProjectPageMainBox box={"Account"} />

        <EditProjectPageSaveBar />
      </div>
    );
  }

}

export default EditProjectPageBackground;

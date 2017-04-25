import React from "react";
import EditProjectPageMenuContainer from "./edit_project_page_menu_container";

import EditProjectPageMotivationalHeaderContainer from "./edit_project_page_motivational_header_container";

import EditProjectPageMainBoxContainer from "./edit_project_page_main_box_container";

import EditProjectPageSaveBar from "./edit_project_page_save_bar";

import BasicsForm from "./basics/basics_form_container";


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
        <EditProjectPageMotivationalHeaderContainer />

        <EditProjectPageMainBoxContainer box={"Basics"}>
          <BasicsForm />
        </EditProjectPageMainBoxContainer>

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

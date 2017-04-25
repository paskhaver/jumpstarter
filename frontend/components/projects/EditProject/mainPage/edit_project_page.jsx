import React from "react";

import Menu from "./menu_container";
import MotivationalHeader from "./motivational_header_container";
import MainBoxContainer from "./main_box_container";
import SaveBar from "./save_bar";

// import BasicsForm from "./../basics/basics_form_container";


class EditProjectPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTab: "Basics"
    };
  }

  render() {
    return (
      <div className="edit-project-page-background">
        <Menu />
        <MotivationalHeader />

        <MainBoxContainer box={"Basics"}>

        </MainBoxContainer>

        <MainBoxContainer box={"Story"} />
        <MainBoxContainer box={"Rewards"} />
        <MainBoxContainer box={"About you"}/>
        <MainBoxContainer box={"Account"} />

        <SaveBar />
      </div>
    );
  }

}

export default EditProjectPage;

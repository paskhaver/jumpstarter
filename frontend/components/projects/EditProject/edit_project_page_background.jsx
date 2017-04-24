import React from "react";
import EditProjectPageMenu from "./edit_project_page_menu";
import EditProjectPageMotivationalHeader from "./edit_project_page_motivational_header";

class EditProjectPageBackground extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="edit-project-page-background">
        <EditProjectPageMenu />
        <EditProjectPageMotivationalHeader />
      </div>
    );
  }

}

export default EditProjectPageBackground;

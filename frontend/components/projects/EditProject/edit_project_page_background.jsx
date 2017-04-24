import React from "react";
import EditProjectPageMenu from "./edit_project_page_menu";

class EditProjectPageBackground extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="edit-project-page-background">
        <EditProjectPageMenu />
      </div>
    );
  }

}

export default EditProjectPageBackground;

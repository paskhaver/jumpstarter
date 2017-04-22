import React from "react";
import CreateProjectBoxContainer from "./create_project_box";
import GeneralInfoIndex from "./general_info_index";

class CreateProjectBackground extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="create-project-background">

        </div>

        <GeneralInfoIndex />
      </div>
    );
  }
}

export default CreateProjectBackground;

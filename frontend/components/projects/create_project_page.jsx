import React from "react";

import CreateProjectBackground from "./create_project_background";
import CreateProjectHeader from "./create_project_header";
import CreateProjectBoxContainer from "./create_project_box";
import GeneralInfoIndex from "./general_info_index";

class CreateProjectPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <CreateProjectBackground>
          <CreateProjectHeader />
          <CreateProjectBoxContainer />
        </CreateProjectBackground>
        <GeneralInfoIndex />
      </div>
    );
  }
}

export default CreateProjectPage;

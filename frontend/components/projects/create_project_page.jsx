import React from "react";

import CreateProjectBackground from "./create_project_background";
import CreateProjectHeader from "./create_project_header";
import CreateProjectFormContainer from "./create_project_form_container";
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
          <CreateProjectFormContainer />
        </CreateProjectBackground>
        <GeneralInfoIndex />
      </div>
    );
  }
}

export default CreateProjectPage;

import React from "react";

import Background from "./background";
import Header from "./header";
import ProjectForm from "./project_form_container";
// import GeneralInfoIndex from "./general_info_index";

class CreateProjectPage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Background>
          <Header />
          <ProjectForm />
        </Background>

      </div>
    );
  }
}

export default CreateProjectPage;

// <GeneralInfoIndex />

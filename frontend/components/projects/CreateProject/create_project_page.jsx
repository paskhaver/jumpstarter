import React from "react";

import Background from "./background";
import Header from "./header";
import ProjectForm from "./project_form_container";
import ErrorsBox from "./errors_box";
import GeneralInfoIndex from "./general_info_index";

function CreateProjectPage() {
  return (
    <div>
      <Background>
        <Header />
        <ErrorsBox />
        <ProjectForm />
      </Background>
      <GeneralInfoIndex />
    </div>
  );
}

export default CreateProjectPage;

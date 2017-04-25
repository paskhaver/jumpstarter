import React from "react";

import Menu from "./menu";
// import MotivationalHeader from "./motivational_header_container";
// import SaveBar from "./save_bar";

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
          { this.props.children}

      </div>
    );
  }
}

export default EditProjectPage;

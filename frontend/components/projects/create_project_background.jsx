import React from "react";

class CreateProjectBackground extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="create-project-background">
          {this.props.children}
        </div>
    );
  }
}

export default CreateProjectBackground;

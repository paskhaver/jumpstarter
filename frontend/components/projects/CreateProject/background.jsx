import React from "react";

class Background extends React.Component {

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

export default Background;

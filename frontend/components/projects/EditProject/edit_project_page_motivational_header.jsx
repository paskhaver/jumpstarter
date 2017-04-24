import React from "react";

class EditProjectPageMotivationalHeader extends React.Component {

  // this.props.name

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="edit-project-page-motivational-header">
        <h2>Let's get started</h2>
        <p>Make a great first impression with your project’s title and
          image, and set your funding goal, campaign duration, and project
          category.
        </p>
      </div>
    );
  }
}

export default EditProjectPageMotivationalHeader;

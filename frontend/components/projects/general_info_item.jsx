import React from "react";

class GeneralInfoItem extends React.Component {

  // this.props.title
  // this.props.description
  // this.props.buttonText

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="general-info-item">
        <h3>{this.props.title}</h3>
        <p>{this.props.description}</p>
        <button>{this.props.buttonText}</button>
      </div>
    );
  }

}

export default GeneralInfoItem;

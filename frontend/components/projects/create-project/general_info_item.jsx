import React from "react";

function GeneralInfoItem(props) {
  const { title, description, buttonText } = props;
  return (
    <div className="general-info-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
}

export default GeneralInfoItem;

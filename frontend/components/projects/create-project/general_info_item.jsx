import React from "react";
import { Link } from "react-router";

function GeneralInfoItem(props) {
  const { title, description, buttonText, link } = props;
  return (
    <div className="general-info-item">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link}><button>{buttonText}</button></Link>
    </div>
  );
}

export default GeneralInfoItem;

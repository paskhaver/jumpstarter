import React from "react";
import { Link } from "react-router";

function MenuListItem(props) {

  const { url, text } = props;
  return (
    <li className="edit-project-page-menu-item">
      <Link to={url}
            activeClassName={"edit-project-active-menu-item"}
            activeStyle={{color: "#2752ff"}}>
            {text}
      </Link>
    </li>
  );

}

export default MenuListItem;

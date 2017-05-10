import React from "react";
import { Link } from "react-router";

const SearchResultItem = ({ project }) => {

  return (
    <li>{project.title}
    </li>
  );

};

export default SearchResultItem;

import React from "react";
import { Link } from "react-router";

const SearchResultItem = ({ project }) => {

  // debugger;

  return (
    <div className="search-result-item">
      <p>{project.title}</p>
      <p>{project.blurb}</p>
      <Link to={`/projects/${project.id}`}>
        <button>View Project</button>
      </Link>
    </div>
  );

};

export default SearchResultItem;

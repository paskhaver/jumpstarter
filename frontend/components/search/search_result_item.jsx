import React from "react";
import { Link } from "react-router";

const SearchResultItem = ({ project }) => {

  // debugger;

  return (
    <div className="search-result-item">
      <h3>{project.title}</h3>
      <p>{project.blurb}</p>
      <Link to={`/projects/${project.id}`}>
        <button>View Project</button>
      </Link>
    </div>
  );

};

export default SearchResultItem;

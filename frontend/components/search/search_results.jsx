import React from "react";
import SearchResultItem from "./search_result_item";

class SearchResults extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { searchResults } = this.props;
    const projectsArray = Object.keys(searchResults);


    const projectItems = projectsArray.map(projectId => {
      const project = searchResults[projectId];
      return <SearchResultItem key={project.id} project={project} />;
    });

    return (
      <ul>
        { projectItems }
      </ul>
    );
  }
}

export default SearchResults;

import React from "react";
import SearchResultItem from "./search_result_item";
import Carousel from "nuka-carousel";

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
      <Carousel className="project-carousel">
        { projectItems }
      </Carousel>
    );
  }
}

export default SearchResults;

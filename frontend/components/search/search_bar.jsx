import React from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "./../../actions/search_actions";

import SearchResults from "./search_results.jsx";

const mapStateToProps = state => ({
  searchResults: state.searchResults
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchResults: query => (dispatch(fetchSearchResults(query)))
  };
};

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    // this.state = { searchTerm: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    this.props.fetchSearchResults(event.target.value);
  }

  render() {
    const { searchResults } = this.props;
    return (
      <div className="search-container">
        <h1>Search Container</h1>
        <input onChange={ this.handleInputChange } type="text" />
        <SearchResults searchResults={searchResults} />
      </div>
    );

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

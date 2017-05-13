import React from "react";
import { connect } from "react-redux";

import { fetchSearchResults } from "./../../actions/search_actions";
import SearchResults from "./search_results.jsx";
import Footer from "./../footer/footer";

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
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    this.props.fetchSearchResults(event.target.value);
  }

  render() {
    const { searchResults } = this.props;
    return (
      <div>
        <div className="search-container">
          <h2>Search for Projects</h2>
          <input onChange={ this.handleInputChange } type="text" />
          <SearchResults className="search-results"
                          searchResults={searchResults} />
        </div>
        <Footer />
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

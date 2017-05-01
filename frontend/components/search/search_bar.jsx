import React from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "./../../actions/search_actions";

import SearchResults from "./search_results.jsx";


const mapStateToProps = (state) => ({
  searchResults: state.results
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchResults: (query) => { return dispatch(fetchSearchResults(query)); }
  };
};

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { results: this.props.searchResults };
  }

  componentDidMount() {
    this.props.fetchSearchResults("film")
              .then(results => {
                this.setState({ results });
              });
  }

  render() {

    if (!this.state.results) {
      return (<div></div>);
    }

    const { results } = this.state;
    return (
      <div>
        Search Container
        <SearchResults results={results} />
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

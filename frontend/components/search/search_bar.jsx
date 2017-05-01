import React from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "./../../actions/search_actions";

import SearchResults from "./search_results.jsx";

const mapStateToProps = (state) => ({
  results: state.search
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchResults: query => (dispatch(fetchSearchResults(query)))
  };
};

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { searchTerm: "", results: {} };
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount() {
    this.props.fetchSearchResults("film")
              .then(results => {
                debugger
                this.setState({ results });
              });
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if (this.props.results !== nextProps.results) {
      const { results } = nextProps;
      this.setState({ results });
      debugger
    }
  }

  handleEdit(event) {
    event.preventDefault();
    this.props.fetchSearchResults(event.target.value);
    debugger
    // this.setState({
    //   searchTerm: event.target.value
    // });
  }

  render() {

    if (Object.keys(this.props.results).length === 0) {
      return (<div></div>);
    }

    debugger
    const { results } = this.props;
    return (
      <div className="search-container">
        Search Container
        <input onChange={ this.handleEdit } type="text"></input>

        <SearchResults results={results} />
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

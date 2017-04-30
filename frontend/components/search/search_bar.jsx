import React from "react";
import { connect } from "react-redux";
import { fetchSearchResults } from "./../../actions/search_actions";


const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchResults: (query) => { return dispatch(fetchSearchResults(query)); }
  };
};

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSearchResults("film");
  }

  render() {
    return (
      <div>Search Container</div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

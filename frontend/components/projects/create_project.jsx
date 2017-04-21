import React from "react";

class CreateProject extends React.Component {

  // this.props.createProject
  // this.props.clearErrors
  // this.props.receiveErrors

  constructor(props) {
    super(props);
    this.state = ({
      category: "Select a category",
      title: "",
      residence: "Select your country",
      categoryModalStatus: "none",
      residencyModalStatus: "none",
    });

    this.handleSpanClick = this.handleSpanClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  generate_categories_list() {
    const categories = ["Art", "Comics", "Crafts", "Dance", "Design", "Fashion",
                        "Film & Video", "Food", "Games", "Journalism", "Music",
                        "Photography", "Publishing", "Technology", "Theater"];

    return categories.map(category => {
      return <li key={category}
                 onClick={ this.handleModalClick("category")}>{category}</li>;
    });
  }

  generate_residencies_list() {

    const residencies = ["Australia", "Austria", "Belgium", "Canada",
                         "Denmark", "France", "Germany", "Hong Kong",
                         "Ireland", "Italy", "Luxembourg", "Mexico",
                         "Netherlands", "New Zealand", "Norway", "Singapore",
                         "Spain", "Sweden", "Switzerland", "United Kingdom",
                         "United States"];

    return residencies.map(residence => {
      return <li key={residence}
                 onClick = { this.handleModalClick("residence") }>{residence}</li>;
    });
  }

  handleModalClick(field) {
     return (event) => {

      let stateModal = (field === "residence") ? "residencyModalStatus" : "categoryModalStatus";
      const nextDisplay = this.state[stateModal] === "none" ? "block" : "none";

      event.preventDefault();
      this.setState({
        [field]: event.target.textContent,
        [stateModal]: nextDisplay
      });
    };
  }

  handleSpanClick(field) {
    return (event) => {
      event.preventDefault();
      const nextDisplay = this.state[field] === "none" ? "block" : "none";

      this.setState({
        [field]: nextDisplay
      });
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const { category, title, residence } = this.state;
    let errors = false;

    if (category === "Select a category") {
      this.props.receiveErrors(["Please select a valid category"]);
      errors = true;
    }

    if (residence === "Select your country") {
      this.props.receiveErrors(["Please select a valid country"]);
      errors = true;
    }

    if (title === "") {
      this.props.receiveErrors(["Please enter a valid title"]);
      errors = true;
    }

    if (!errors) {
      this.props.createProject({ category, title, residence });
      hashHistory.push("/");
    }
  }

  render() {
    return (
      <div className="create-project">
        <form onClick = { this.handleSubmit }>

          <div className="row">
            <h2>Get started</h2>
          </div>

          <div className="row">
            <p>Choose a category</p>
            <span onClick = {this.handleSpanClick("categoryModalStatus")}>
              {this.state.category}
            </span>

              <div className="modal"
                    style={{display: this.state.categoryModalStatus}}>
                <ul>
                  {this.generate_categories_list() }
                </ul>
              </div>

          </div>

          <div className="row">
            <p>Give your project a title:</p>
            <input type="text"
                   placeholder="...title"/>
          </div>

          <div className="row">
            <p>Your permanent residence</p>
              <span onClick = {this.handleSpanClick("residencyModalStatus")}>
                {this.state.residence}</span>

            <div className="modal"
                  style={{display: this.state.residencyModalStatus}} >
              <ul>
                { this.generate_residencies_list() }
              </ul>
            </div>

          </div>

          <div className="row">
            <input type="submit" value="Save and continue" />
          </div>

        </form>
      </div>
    );
  }
}

export default CreateProject;

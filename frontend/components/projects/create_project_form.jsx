import React from "react";
import { hashHistory } from 'react-router';

class CreateProjectForm extends React.Component {

  // this.props.currentUser

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
    this.handleTitleEdit = this.handleTitleEdit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  generateCategoriesList() {
    const categories = ["Art", "Comics", "Crafts", "Dance", "Design", "Fashion",
                        "Film & Video", "Food", "Games", "Journalism", "Music",
                        "Photography", "Publishing", "Technology", "Theater"];

    return categories.map(category => {
      return <li key={category}
                 onClick={ this.handleModalClick("category")}>{category}</li>;
    });
  }

  generateResidenciesList() {

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

  handleTitleEdit(event) {
    event.preventDefault();
    this.setState({
      "title" : event.target.value
    });
  }

  checkForErrors() {
    this.props.clearErrors();
    const { category, title, residence } = this.state;
    let errors = false;

    if (category === "Select a category") {
      this.props.receiveErrors(["Please select a valid category"]);
      errors = true;
    }

    if (title === "") {
      this.props.receiveErrors(["Please enter a valid title"]);
      errors = true;
    }

    if (residence === "Select your country") {
      this.props.receiveErrors(["Please select a valid country"]);
      errors = true;
    }

    return errors;
  }

  handleSubmit(event) {
    event.preventDefault();
    const errors = this.checkForErrors();
    const { category, title, residence } = this.state;
    debugger

    if (!errors) {
      if (this.props.currentUser) {
        const creator_id = this.props.currentUser.id;
        this.props.createProject({ creator_id, category, title, residence })
                  .then(project => {
                    debugger
                    console.log(project);
                  });
        debugger
        hashHistory.push("/about");
      } else {
        // this.props.storeProject();
      }
    }
  }

  render() {
    return (
        <form className="create-project-form"
              onSubmit = { this.handleSubmit }>

              <p>Choose a category:</p>

              <span onClick = {this.handleSpanClick("categoryModalStatus")}>
                {this.state.category}
              </span>

              <div className="modal"
                    style={{display: this.state.categoryModalStatus}}>
                <ul>
                  {this.generateCategoriesList() }
                </ul>
              </div>

              <p>Give your project a title:</p>
              <input type="text"
                     placeholder="title..."
                     onChange={ this.handleTitleEdit }/>


             <p>Your permanent residence</p>
               <span onClick = {this.handleSpanClick("residencyModalStatus")}>
                 {this.state.residence}</span>

             <div className="modal"
                   style={{display: this.state.residencyModalStatus}} >
               <ul>
                 { this.generateResidenciesList() }
               </ul>
             </div>

             <input type="submit" value="Save and continue" />
        </form>
    );
  }
}

export default CreateProjectForm;

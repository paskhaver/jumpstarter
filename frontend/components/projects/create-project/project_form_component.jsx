import React from "react";
import { hashHistory } from 'react-router';

class CreateProjectForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      category: "Select a category",
      title: "",
      residence: "Select your country",
      categoryModalStatus: "none",
      residencyModalStatus: "none",
    });

    this.handleSpanClick  = this.handleSpanClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.handleTitleEdit  = this.handleTitleEdit.bind(this);
    this.handleSubmit     = this.handleSubmit.bind(this);
  }

  generateCategoriesList() {
    const categories = ["Art", "Comics", "Crafts", "Dance", "Design",
    "Fashion", "Film & Video", "Food", "Games", "Journalism", "Music",
    "Photography", "Publishing", "Technology", "Theater"];

    return categories.map(category => {
      return (
        <li key={category}
            onClick={ this.handleModalClick("category") }>
          {category}
        </li>
      );
    });
  }

  generateResidenciesList() {

    const residencies = ["Australia", "Austria", "Belgium", "Canada",
    "Denmark", "France", "Germany", "Hong Kong", "Ireland", "Italy",
    "Luxembourg", "Mexico", "Netherlands", "New Zealand", "Norway",
    "Singapore", "Spain", "Sweden", "Switzerland", "United Kingdom",
    "United States"];

    return residencies.map(residence => {
      return (
        <li key={residence}
            onClick = { this.handleModalClick("residence") }>
            {residence}
        </li>
      );
    });
  }

  handleModalClick(field) {
     return (event) => {
      event.preventDefault();

      let stateModal = (field === "residence") ?
                        "residencyModalStatus" :
                        "categoryModalStatus";

      const nextDisplay = this.state[stateModal] === "none" ?
                          "block" : "none";

      this.setState({
        [field]: event.target.textContent,
        [stateModal]: nextDisplay
      });
    };
  }

  handleSpanClick(field) {
    return (event) => {
      event.preventDefault();
      const nextDisplay = this.state[field] === "none" ?
                          "block" : "none";

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
    let hasErrors = true, errors = [];

    if (category === "Select a category") { errors.push("Please select a valid category"); }
    if (title === "") { errors.push("Please enter a valid title"); }
    if (residence === "Select your country") { errors.push("Please select a valid country"); }

    if (errors.length === 0) {
      hasErrors = false;
    } else {
      this.props.receiveErrors(errors);
    }

    return hasErrors;
  }

  handleSubmit(event) {
    event.preventDefault();
    const errors = this.checkForErrors();

    // If no errors exist on the front-end and the user is logged in
    if (!errors) {
      const { currentUser } = this.props;
      if (currentUser) {
        const creator_id = currentUser.id;
        const { category, title, residence } = this.state;
        const project = { category, title, residence, creator_id };

        this.props.createProject(project)
                  .then(newProject => {
                    hashHistory.push(`/projects/${newProject.id}/edit/basics`);
                  });

      } else {
        this.props.clearErrors();
        this.props.receiveErrors(["Please login to create a project"]);
        hashHistory.push("/login");
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

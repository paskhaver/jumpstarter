import React from "react";

class CreateProject extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      category: "",
      title: "",
      residence: ""
    });
  }

  generate_categories_list() {
    const categories = ["Art", "Comics", "Crafts", "Dance", "Design", "Fashion",
                        "Film & Video", "Food", "Games", "Journalism", "Music",
                        "Photography", "Publishing", "Technology", "Theater"];

    return categories.map(category => {
      return <li key={category}>{category}</li>;
    });
  }

  generate_residencies_list() {

    const residencies = ["Australia", "Austria", "Belgium", "Canada",
                         "Denmark", "France", "Germany", "Hong Kong",
                         "Ireland", "Italy", "Luxembourg", "Mexico",
                         "Netherlands", "New Zealand", "Norway", "Singapore",
                         "Spain", "Sweden", "Switzerland", "United Kingdom",
                         "United States"];

    return residencies.map(residency => {
      return <li key={residency}>{residency}</li>;
    });
  }

  render() {
    return (
      <div className="create-project">
        <form>

          <div className="row">
            <h2>Get started</h2>
          </div>

          <div className="row">
            <p>Choose a category:</p>
            <span>Select a category</span>

              <div className="modal">
                <ul>
                  {this.generate_categories_list() }
                </ul>
              </div>
          </div>

          <div className="row">
            <p>Give your project a title</p>
            <input type="text" />
          </div>

          <div className="row">
            <p>Your permanent residence</p>
            <div className="modal">
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

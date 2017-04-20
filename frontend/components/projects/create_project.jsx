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

  render() {
    return (
      <div className="create-project">
        <form>
          <div className="row">
            <h2>Get started</h2>
          </div>

          <div className="row">
            <p>Choose a category:</p>
            <select>
              <option>Art</option>
              <option>Comics</option>
              <option>Crafts</option>
              <option>Dance</option>
              <option>Design</option>
              <option>Fashion</option>
              <option>Film & Video</option>
              <option>Food</option>
              <option>Games</option>
              <option>Journalism</option>
              <option>Music</option>
              <option>Photography</option>
              <option>Publishing</option>
              <option>Technology</option>
              <option>Theater</option>
            </select>
          </div>

          <div className="row">
            <p>Give your project a title</p>
            <input type="text" />
          </div>

          <div className="row">
            <p>Your permanent residence</p>
            <select>
              <option>Australia</option>
              <option>Austria</option>
              <option>Belgium</option>
              <option>Canada</option>
              <option>Denmark</option>
              <option>France</option>
              <option>Germany</option>
              <option>Hong Kong</option>
              <option>Ireland</option>
              <option>Italy</option>
              <option>Luxembourg</option>
              <option>Mexico</option>
              <option>Netherlands</option>
              <option>New Zealand</option>
              <option>Norway</option>
              <option>Singapore</option>
              <option>Spain</option>
              <option>Sweden</option>
              <option>Switzerland</option>
              <option>United Kingdom</option>
              <option>United States</option>
            </select>
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

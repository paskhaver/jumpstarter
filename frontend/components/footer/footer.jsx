import React from "react";
import { Link } from 'react-router';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  generateListItems(array) {
    return array.map((linkText, idx) => {
      return (<li key={idx}>{linkText}</li>);
    });
  }

  render() {

    // const aboutUsLinks   = ["What is Jumpstarter?", "Who we are", "Impact", "Jobs", "Press", "Stats", "Newsletters", "Spotlight", "Drip", "Jumpstarter Live", "This Year in Jumpstarter: 2017"];
    // const helpLinks      = ["FAQ", "Our Rules", "Creator Handbook", "Campus", "Experts", "Trust & Safety", "Support", "Trust & Safety", "Support", "Terms of Use", "Privacy Policy", "Cookie Policy"];
    // const discoverLinks1 = ["Art", "Comics", "Crafts", "Dance", "Design", "Fashion", "Film & Video", "Food"];
    // const discoverLinks2 = ["Games", "Journalism", "Music", "Photography", "Publishing", "Technology", "Theater"];
    // const helloLinks     = ["Happening", "Company Blog", "Engineering Blog", "The Creative", "Independent"];

    return (
      <footer>

        <div className="footer-container">
          <div className="footer-column">
            <h3>Made by Boris Paskhaver</h3>
            <ul>
              <li><a href="https://www.github.com/paskhaver" target="_blank">GitHub</a></li>
              <li><a href="http://www.borispaskhaver.com" target="_blank">Portfolio</a></li>
              <li><a href="https://www.linkedin.com/in/boris-paskhaver-73399760/" target="_blank">LinkedIn</a></li>
              <li><a href="https://www.udemy.com/user/borispaskhaver/" target="_blank">Udemy Instructor Profile</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Technologies Used</h3>
            <ul>
              <li>Ruby</li>
              <li>Ruby on Rails</li>
              <li>React</li>
              <li>Redux</li>
              <li>JavaScript (ES6)</li>
              <li>jQuery</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Other Projects</h3>
              <ul>
                <li><a href="https://paskhaver.github.io/sokoban/" target="_blank">Sokoban</a></li>
                <li><a href="https://www.github.com/paskhaver/catalyst" target="_blank">Catalyst</a></li>
              </ul>

          </div>


        </div>

      </footer>
    );
  }

}

export default Footer;

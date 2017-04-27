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

    const aboutUsLinks   = ["What is Jumpstarter?", "Who we are", "Impact", "Jobs", "Press", "Stats", "Newsletters", "Spotlight", "Drip", "Jumpstarter Live", "This Year in Jumpstarter: 2017"];
    const helpLinks      = ["FAQ", "Our Rules", "Creator Handbook", "Campus", "Experts", "Trust & Safety", "Support", "Trust & Safety", "Support", "Terms of Use", "Privacy Policy", "Cookie Policy"];
    const discoverLinks1 = ["Art", "Comics", "Crafts", "Dance", "Design", "Fashion", "Film & Video", "Food"];
    const discoverLinks2 = ["Games", "Journalism", "Music", "Photography", "Publishing", "Technology", "Theater"];
    const helloLinks     = ["Happening", "Company Blog", "Engineering Blog", "The Creative", "Independent"];

    return (
      <footer>

        <div className="footer-container">
          <div className="footer-column">
            <h3>About Us</h3>
            <ul>{ this.generateListItems(aboutUsLinks) }</ul>
          </div>

          <div className="footer-column">
            <h3>Help</h3>
            <ul>{ this.generateListItems(helpLinks) }</ul>
          </div>

          <div className="footer-column">
            <h3>Discover</h3>
            <ul> { this.generateListItems(discoverLinks1) } </ul>
          </div>

          <div className="footer-column">
            <h3>&nbsp;</h3>
            <ul>{ this.generateListItems(discoverLinks2) }</ul>
          </div>

          <div className="footer-column">
            <h3>Hello</h3>
            <ul>{ this.generateListItems(helloLinks) }</ul>
          </div>
        </div>

      </footer>
    );
  }

}

export default Footer;

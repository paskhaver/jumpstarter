import React from "react";
import { Link } from 'react-router';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer>
        <div>About Us
          <ul>
            <li>What is Jumpstarter?</li>
            <li>Who we are</li>
            <li>Impact</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Stats</li>
            <li>Newsletters</li>
            <li>Spotlight</li>
            <li>Drip</li>
            <li>Jumpstarter Live</li>
            <li>This Year in Jumpstarter: 2017</li>
          </ul>
        </div>

        <div>Help

          <ul>
            <li>FAQ</li>
            <li>Our Rules</li>
            <li>Creator Handbook</li>
            <li>Campus</li>
            <li>Experts</li>
            <li>Trust & Safety</li>
            <li>Support</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div>Discover
          <ul>
            <li>Art</li>
            <li>Comics</li>
            <li>Crafts</li>
            <li>Dance</li>
            <li>Design</li>
            <li>Fashion</li>
            <li>Film & Video</li>
            <li>Food</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Games</li>
            <li>Journalism</li>
            <li>Music</li>
            <li>Photography</li>
            <li>Publishing</li>
            <li>Technology</li>
            <li>Theater</li>
          </ul>
        </div>

        <div>Hello
          <ul>
            <li>Happening</li>
            <li>Company Blod</li>
            <li>Engineering Blog</li>
            <li>The Creative</li>
            <li>Independent</li>
          </ul>
        </div>



      </footer>
    );
  }

}

export default Footer;

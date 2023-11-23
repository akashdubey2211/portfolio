import { Component } from "react";
import {
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoLogoGithub
} from "react-icons/io";
import "./footer.css";
class Footer extends Component {
  render() {
    return (
      <footer>
        <a href="#" className="footer__logo">
          Akash Dubey
        </a>
        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="footer__social">
          <a href="https://www.facebook.com/profile.php?id=100025704156015" target="_blank">
            <IoLogoFacebook />
          </a>
          <a href="https://www.linkedin.com/in/akash-dubey-1040791a7/" target="_blank">
            <IoLogoLinkedin />
          </a>
          <a href="https://twitter.com/AkashDu72477790" target="_blank">
            <IoLogoTwitter />
          </a>
          <a href="https://github.com/akashdubey2211" target="_blank">
            <IoLogoGithub />
          </a>
        </div>
        <div className="footer__copyright">
          <small>&copy; Akash Dubey. All rights reserved</small>
        </div>
      </footer>
    );
  }
}

export default Footer;

import { Component } from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
class HeaderSocials extends Component {
  render() {
    return (
      <div className="header__socials">
        <a href="https://www.linkedin.com/in/akash-dubey-1040791a7/" target="_blank">
          <BsLinkedin />
        </a>
        <a href="https://github.com/akashdubey2211" target="_blank">
          <FaGithub />
        </a>
      </div>
    );
  }
}
export default HeaderSocials;

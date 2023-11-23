import { Component } from "react";
import ME from "../../assets/avatar1.jpg";
import { BsAwardFill } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import "./about.css";
class About extends Component {
  render() {
    return (
      <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="me" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <BsAwardFill className="about__icon" />
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>
              <article className="about__card">
                <FiUsers className="about__icon" />
                <h5>Companies that i worked for</h5>
                <small>Social Beat, Bolo Live , Interview Kickstart ,JCS Pvt. LTd. GeeksVila Solutions and Varahas Technologies.</small>
              </article>
              <article className="about__card">
                <FaProjectDiagram className="about__icon" />
                <h5>Features & Products</h5>
                <small> Contributed Coupon code, Referrals, Integrated payement gateways like , razorpay , affirm and eduvanz  </small>
                <small>Building Inhouse Enterprises application for current Companies. </small>
              </article>
            </div>
            <p>
            Hello there! 🤟

            I'm Akash Dubey, a Frontend Engineer with nearly 2 years of experience in Frontend development. I specialize in technologies like React.js, TypeScript, JavaScript, Tailwind CSS, SCSS, Next.js, jQuery, Ajax, Vue.js, and Figma.

            I am passionate about crafting intuitive and user-friendly web experiences. With a keen eye for detail and a strong focus on code quality, I strive to deliver high-quality solutions that meet both user needs and business objectives.

            Throughout my career, I have collaborated with cross-functional teams to develop and deploy innovative web applications. I enjoy working in fast-paced environments that foster creativity and encourage continuous learning.

            Apart from my technical skills, I also possess strong communication and interpersonal skills, which enable me to effectively collaborate with stakeholders and contribute to team success. I am always eager to take on new challenges and stay up-to-date with the latest industry trends.

            feel free to reach out to me for any discussion - dubeyakash145@gmail.com


            Thank you for taking the time to visit my profile!
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;

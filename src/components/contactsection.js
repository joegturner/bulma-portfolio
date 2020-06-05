import React from "react";
import Img from "gatsby-image";

import linkedInLogo from "../images/icon-linkedin.png";
import gitHubLogo from "../images/icon-github.png";
import "./style.scss";

const ContactSection = ({ aboutPics }) => {
  return (
    <React.Fragment>
      <div id="contact"></div>
      <section className="section gradientBg-contact">
        <div className="container">
          <h1 id="section-title" className="title has-text-centered is-size-1">
            Contact information
          </h1>

          <div className="content has-text-centered">
            <p
              id="email-box"
              className="tag is-size-5 has-background-white has-text-centered"
            >
              {" "}
              joe.g.turner@gmail.com
            </p>
          </div>

          <div className="content has-text-centered">
            <a
              id="contact-button"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/joe-turner-90136044"
              className="button is-white is-size-6"
            >
              <span className="icon">
                <img className="icon" src={linkedInLogo} alt="Logo-2" />
              </span>
              <span> Connect on LinkedIn</span>
            </a>
            <a
              id="contact-button"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/joegturner"
              className="button is-white is-size-6"
            >
              <span className="icon">
                <img className="icon" src={gitHubLogo} alt="Logo-2" />
              </span>
              <span>Project Source Codes</span>
            </a>
          </div>

          <div className="tile is-ancestor">
            <div className="tile is-4"></div>
            <div className="tile is-4">
              <article className="tile is-child">
                <figure className="image">
                  <Img
                    className="contact-pic"
                    fluid={aboutPics[0].childImageSharp.fluid}
                    alt="profile_pic"
                  />
                </figure>
              </article>
            </div>
            <div className="tile is-4"></div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default ContactSection;

import React from "react";
import Img from "gatsby-image";

import linkedInLogo from "../images/icon-linkedin.png";
import gitHubLogo from "../images/icon-github.png";
import "./style.scss";

const ContactSection = ({ aboutPics }) => {
  return (
    <React.Fragment>
      <a id="contact"></a>
      <section className="section gradientBg-contact">
        <div className="container">
          <h1 id="section-title" className="title has-text-centered is-size-1">
            Thank you for visiting my site!
          </h1>
          <h2 className="subtitle has-text-centered is-size-3">
            Please reach out at:
          </h2>
          <div className="columns is-centered has-text-centered">
            <div id="email-box" className="notification column is-one-fifth">
              <span className="tag">
                <p className="is-size-5"> joe.g.turner@gmail.com</p>
              </span>
            </div>
          </div>

          <div className="level">
            <div className="level-item">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <a
                      id="button-1"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/joe-turner-90136044"
                      className="button is-light is-link is-size-6"
                    >
                      <span className="icon">
                        <img className="icon" src={linkedInLogo} alt="Logo-2" />
                      </span>
                      <span> Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="level-item">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <a
                      id="button-1"
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/joegturner"
                      className="button is-light is-link is-size-6"
                    >
                      <span className="icon">
                        <img className="icon" src={gitHubLogo} alt="Logo-2" />
                      </span>
                      <span>Project Source Codes</span>
                    </a>
                  </div>
                </div>
              </article>
            </div>
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

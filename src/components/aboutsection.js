import React from "react";
import Img from "gatsby-image";

import "./style.scss";

const AboutSection = ({ aboutPics }) => {
  return (
    <React.Fragment>
      <div className="anchor" id="about"></div>
      <section className="section gradientBg-about hero is-fullheight-with-navbar">
        <div className="container">
          <h1
            id="section-title"
            className="title has-text-centered is-size-1 has-text-black "
          >
            About me
          </h1>
          <div className="tile is-ancestor">
            <div className="tile is-parent is-2">
              <article className="tile is-child">
                <figure className="image is-fullwidth">
                  <Img
                    id="about-pic"
                    className="about-pic"
                    fluid={aboutPics[1].childImageSharp.fluid}
                    alt="profile_pic"
                  />
                </figure>
              </article>
            </div>
            <div className="tile is-parent is-10">
              <div id="about-card" className="content notification">
                <p className="subtitle is-size-5 has-text-white">
                  {" "}
                  I currently live in New York City. I have been working as an
                  Instrumentation and controls engineer in both controls design
                  and system integration within the Industrial setting for 8
                  years.{" "}
                </p>
                <p className="subtitle is-size-5 has-text-white">
                  I've discovered a passion for coding, and decided to pursue my
                  new interests by learning full stack javascript development. I
                  am excited to say that I am now actively seeking an
                  opportunity to pursue my newly discovered passion as a
                  JavaScript Developer.{" "}
                  <strong className="has-text-white is-size-4">
                    Thank you for visiting my site!
                  </strong>{" "}
                </p>
              </div>
            </div>
          </div>

          <h3 className="title has-text-centered has-text-black">Education</h3>
          <div className="tile is-ancestor">
            <div className="tile is-6 is-parent is-centered">
              <article
                id="edu-card"
                className="tile is-child notification is-info"
              >
                <h4 className="title has-text-white">Treehouse</h4>
                <p className="subtitle has-text-white">
                  Online Fullstack Javascript Techdegree, Dec 2019 - May 2020
                </p>
              </article>
            </div>
            <div className="tile is-6 is-parent is-centered">
              <article
                id="edu-card"
                className="tile is-child notification is-info"
              >
                <h4 className="title has-text-white">
                  University of the Pacific, Stockton CA
                </h4>
                <p className="subtitle has-text-white">
                  {" "}
                  Bachelor of Science in Electrical Engineering 2012
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="hero section-edge-4"></section>
    </React.Fragment>
  );
};

export default AboutSection;

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
            id="section-title-dark"
            className="title has-text-centered is-size-1"
          >
            About me
          </h1>
          <div className="tile is-ancestor">
            <div className="tile is-parent is-2">
              <article
                className="tile is-child"
                data-aos="zoom-in"
                data-aos-offset="100"
                data-aos-easing="ease-in-sine"
                data-aos-duration="800"
              >
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
                <p id="section-title-dark" className="is-size-5">
                  {" "}
                  I currently live in New York City. I have been working as an
                  Instrumentation and controls engineer in both controls design
                  and system integration within the Industrial setting for 8
                  years.{" "}
                </p>
                <p id="section-title-dark" className="is-size-5">
                  I've discovered a passion for coding, and decided to pursue my
                  new interests by learning full stack javascript development. I
                  am now actively seeking an opportunity to work as a JavaScript
                  Developer. Thank you for visiting my site!
                </p>
              </div>
            </div>
          </div>

          <h3 className="title has-text-centered has-text-black is-size-2">
            Education
          </h3>

          {/* <div className="has-text-centered">
            <article id="edu-card" className="notification">
              <h4 id="section-title-dark" className="title">
                Treehouse
              </h4>
              <p id="section-title-dark" className="subtitle">
                Online Fullstack Javascript Techdegree, Dec 2019 - May 2020
              </p>
            </article>
            <article id="edu-card" className="notification">
              <h4 id="section-title-dark" className="title">
                University of the Pacific, Stockton CA
              </h4>
              <p id="section-title-dark" className="subtitle">
                {" "}
                Bachelor of Science in Electrical Engineering 2012
              </p>
            </article>
          </div> */}

          <div className="tile is-ancestor is-vertical">
            <div className="tile is-parent has-text-centered">
              <article
                id="edu-card"
                className="notification"
                data-aos="fade-right"
                data-aos-anchor-placement="center-bottom"
                data-aos-easing="linear"
                data-aos-duration="200"
              >
                <h4 id="section-title-dark" className="title">
                  Treehouse
                </h4>
                <p id="section-title-dark" className="subtitle">
                  Online Fullstack Javascript Techdegree, Dec 2019 - May 2020
                </p>
              </article>
            </div>
            <div className="tile is-parent has-text-centered">
              <article
                id="edu-card"
                className="notification"
                data-aos="fade-right"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-easing="linear"
                data-aos-duration="200"
              >
                <h4 id="section-title-dark" className="title">
                  University of the Pacific, Stockton CA
                </h4>
                <p id="section-title-dark" className="subtitle">
                  {" "}
                  Bachelor of Science in Electrical Engineering 2012
                </p>
              </article>
            </div>
          </div>

          {/* <div className="tile is-ancestor">
            <div className="tile is-6 is-parent is-centered">
              <article
                id="edu-card"
                className="tile is-child notification is-info"
              >
                <h4 id="section-title-dark" className="title">
                  Treehouse
                </h4>
                <p id="section-title-dark" className="subtitle">
                  Online Fullstack Javascript Techdegree, Dec 2019 - May 2020
                </p>
              </article>
            </div>
            <div className="tile is-6 is-parent is-centered">
              <article
                id="edu-card"
                className="tile is-child notification is-info"
              >
                <h4 id="section-title-dark" className="title">
                  University of the Pacific, Stockton CA
                </h4>
                <p id="section-title-dark" className="subtitle">
                  {" "}
                  Bachelor of Science in Electrical Engineering 2012
                </p>
              </article>
            </div>
          </div> */}
        </div>
      </section>
      {/* <section className="hero section-edge-4"></section> */}
    </React.Fragment>
  );
};

export default AboutSection;

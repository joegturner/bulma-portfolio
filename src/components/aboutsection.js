import React from "react";
import Img from "gatsby-image";

import "./style.scss";

const AboutSection = ({ aboutPics }) => {
  return (
    <div>
      <section className="section gradientBg-grey hero is-fullheight-with-navbar">
        <div className="container">
          <h1 className="title has-text-centered is-uppercase is-size-1 has-text-white">
            About me
          </h1>
          <div className="tile is-ancestor">
            <div className="tile is-parent is-4">
              <article className="tile is-child">
                <figure className="image is-fullwidth">
                  <Img
                    className="rounded-pic"
                    fluid={aboutPics[1].childImageSharp.fluid}
                    alt="profile_pic"
                  />
                </figure>
              </article>
            </div>
            <div className="tile is-parent is-8">
              <div className="content">
                <p className="subtitle notification is-size-5">
                  {" "}
                  I was born and raised in Portland, OR, moved to Miami in 2019,
                  and now currently residing in New York City. I have been
                  working as an Instrumentation and controls engineer in both
                  controls design and system integration within the Industrial
                  setting for 8 years.{" "}
                </p>
                <p className="subtitle notification is-size-5">
                  I've discovered a passion for coding, and decided to pursuit
                  my new interests by learning full stack javascript
                  development. I am excited to say that I am now actively
                  seeking an opportunity to pursuit my newly discovered passion
                  as a JavaScript Developer. Thank you for visiting my site!{" "}
                </p>
              </div>
            </div>
          </div>

          <h3 className="title has-text-centered has-text-white">Education</h3>
          <div className="tile is-ancestor">
            <div className="tile is-6 is-parent is-centered">
              <article className="tile is-child notification is-info">
                <h4 className="title has-text-white">Treehouse</h4>
                <p className="subtitle has-text-white">
                  Online Fullstack Javascript Techdegree, Dec 2019 - May 2020
                </p>
              </article>
            </div>
            <div className="tile is-6 is-parent is-centered">
              <article className="tile is-child notification is-info">
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
    </div>
  );
};

export default AboutSection;

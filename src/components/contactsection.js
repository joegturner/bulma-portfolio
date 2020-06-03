import React from "react";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import Img from "gatsby-image";

import "./style.scss";

const ContactSection = ({ aboutPics }) => {
  return (
    <div>
      <section className="section gradientBg-purple">
        <div className="container">
          <h1 className="title has-text-centered is-size-1">
            Thank you for visiting my site!
          </h1>
          <h2 className="subtitle has-text-centered is-size-3">
            Please reach out at:
          </h2>
          <div className="columns is-centered has-text-centered">
            <div className="round-edges notification column is-one-fifth">
              <span className="icon">
                <FaMailBulk size="fa-2x" />
              </span>
              <span> joe.g.turner@gmail.com</span>
            </div>
          </div>

          <div className="level">
            <div className="level-item">
              <article className="media">
                <div className="media-content">
                  <div className="content">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/joe-turner-90136044"
                      className="button is-link is-size-6"
                    >
                      <span className="icon">
                        <FaLinkedin size="fa-2x" />
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
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/joegturner"
                      className="button is-link is-size-6"
                    >
                      <span className="icon">
                        <FaGithub size="fa-2x" />
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
                    className="rounded-pic"
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
    </div>
  );
};
// const ContactSection = ({ aboutPics }) => {
// 	return (
// 	  <div>
// 		<section className="section gradientBg-purple">
// 		  <div className="container">
// 			<h1 className="title">Contact me</h1>
// 			<h2 className="subtitle">Thank you for visiting my site!</h2>
// 			<div className="columns is-multiline">
// 			  <div className="column is-one-third">
// 				<article className="media">
// 				  <div className="media-content">
// 					<div className="content">
// 					  <a
// 						href="joe.g.turner@gmail.com"
// 						className="button is-size-5"
// 					  >
// 						<span className="icon">
// 						  <FaMailBulk size="fa-2x" />
// 						</span>
// 						<span>joe.g.turner@gmail.com</span>
// 					  </a>
// 					</div>
// 				  </div>
// 				</article>
// 			  </div>
// 			  <div className="column is-one-third">
// 				<article className="media">
// 				  <div className="media-content">
// 					<div className="content">
// 					  <a
// 						href="https://www.linkedin.com/in/joe-turner-90136044"
// 						className="button is-size-5"
// 					  >
// 						<span className="icon">
// 						  <FaLinkedin size="fa-2x" />
// 						</span>
// 						<span>Connect on LinkedIn</span>
// 					  </a>
// 					</div>
// 				  </div>
// 				</article>
// 			  </div>
// 			  <div className="column is-one-third">
// 				<article className="media">
// 				  <div className="media-content">
// 					<div className="content">
// 					  <a
// 						href="https://github.com/joegturner"
// 						className="button is-size-5"
// 					  >
// 						<span className="icon">
// 						  <FaGithub size="fa-2x" />
// 						</span>
// 						<span>Project Source Codes</span>
// 					  </a>
// 					</div>
// 				  </div>
// 				</article>
// 			  </div>
// 			</div>
// 			<div className="tile is-ancestor">
// 			  <div className="tile is-3"></div>
// 			  <div className="tile is-6">
// 				<article className="tile is-child">
// 				  <figure className="image">
// 					<Img
// 					  className="rounded-pic"
// 					  fluid={aboutPics[0].childImageSharp.fluid}
// 					  alt="profile_pic"
// 					/>
// 				  </figure>
// 				</article>
// 			  </div>
// 			  <div className="tile is-3"></div>
// 			</div>
// 		  </div>
// 		</section>
// 	  </div>
// 	);
//   };

export default ContactSection;

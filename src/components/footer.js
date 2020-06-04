import React from "react";
import { StaticQuery, graphql } from "gatsby";
import "./style.scss";

import gatsbyLogo from "../images/gatsby-icon.png";
import bulmaLogo from "../images/bulma-logo.png";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SocialQuery {
        site {
          siteMetadata {
            gatsby
            bulma
          }
        }
      }
    `}
    render={(data) => (
      <footer className="footer center has-background-light">
        <div className="content has-text-centered">
          <p className="is-size-4">
            Made with
            {` `}
            <a target="_blank" rel="noreferrer" href="https://gatsbyjs.org">
              <img className="icon" src={gatsbyLogo} alt="Logo-1" />
            </a>
            {` `} and{` `}
            <a target="_blank" rel="noreferrer" href="https://bulma.io">
              <img className="icon" src={bulmaLogo} alt="Logo-2" />
            </a>
          </p>
        </div>
      </footer>
    )}
  />
);

export default Footer;

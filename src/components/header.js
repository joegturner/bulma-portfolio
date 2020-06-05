import React from "react";

import "./style.scss";
import locationIcon from "../images/icon-loc.png";
import scrollIcon from "../images/scroll-down-icon.jpg";

const Header = () => (
  <>
    <div id="top"></div>
    <section className="hero gradientBg-header is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container center">
          <article className="media">
            <div className="media-content">
              <div className="content has-text-centered">
                <h1 id="name-text" className="title has-text-black">
                  Joe Turner
                </h1>

                <h1 id="header-sub-text" className="subtitle is-size-3">
                  Fullstack Javascript Developer{" "}
                </h1>
                <div className="container has-text-centered">
                  <span>
                    <img className="icon" src={locationIcon} alt="Logo-2" />
                  </span>

                  <span className="is-size-5">New York City</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="has-text-centered">
        {" "}
        <p id="header-text" className="subtitle is-italic is-size-4">
          Welcome to my Portfolio Site
        </p>
        <div className="add-margin-bottom">
          <img className="icon is-large" src={scrollIcon} alt="Logo-2" />
        </div>
      </div>
    </section>
    <section className="hero section-edge-1"></section>
  </>
);

export default Header;

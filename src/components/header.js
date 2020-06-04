import React from "react";

import "./style.scss";
import scrollIcon from "../images/scroll-down-icon.jpg";

const Header = () => (
  <>
    <a id="top"></a>
    <section className="hero gradientBg-header is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container center">
          <article className="media">
            <div className="media-content">
              <div className="content has-text-centered">
                <h1 id="name-text" className="title has-text-black">
                  Joe Turner
                </h1>

                <h1 id="h1-font" className="subtitle is-size-2">
                  Fullstack Javascript Developer{" "}
                </h1>

                <p className="subtitle is-size-5">(this one is my fav font)</p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="has-text-centered">
        {" "}
        <p id="h1-font" className="subtitle is-italic is-size-4">
          Welcome to my Portfolio Site
        </p>
        <div className="add-margin-bottom">
          <img className="icon is-large" src={scrollIcon} alt="Logo-2" />
        </div>
      </div>
    </section>
  </>
);

export default Header;

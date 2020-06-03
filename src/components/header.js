import React from "react";

import "./style.scss";

const Header = () => (
  <>
    <a id="top"></a>
    <section className="hero gradientBg-header is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container center">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <h1 id="name-text" className="is-uppercase is-size-1 ">
                  Joe Turner
                </h1>
                <p className="subtitle is-size-3">
                  Problem Solver / Engineer / Lifelong Learner{" "}
                </p>
                <p className="subtitle is-size-4">
                  and Aspiring Fullstack Javascript Developer
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </>
);

export default Header;

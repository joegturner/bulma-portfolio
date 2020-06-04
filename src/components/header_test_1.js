import React from "react";

import "./style.scss";

const HeaderOne = () => (
  <>
    <a id="top"></a>
    <section className="hero gradientBg-header is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container center">
          <article className="media">
            <div className="media-content">
              <div className="content has-text-centered">
                <h1 id="name-text-1" className="">
                  Joe Turner
                </h1>
                <p className="subtitle is-size-3">
                  Problem Solver / Engineer / Lifelong Learner{" "}
                </p>
                <p className="subtitle is-size-4">
                  and Aspiring Fullstack Javascript Developer
                </p>
                <p className="subtitle is-size-2">Font called: Bungee Inline</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </>
);

export default HeaderOne;

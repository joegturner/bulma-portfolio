import React from "react";

import "./style.scss";

import Navbar from "./navbar";

const Header = () => (
  <>
    <Navbar />
    <section className="hero gradientBg is-fullheight-with-navbar">
      <div className="hero-body">
        <div className="container center">
          <article className="media">
            <div className="media-content">
              <div className="content">
                <h1 className="is-uppercase is-size-1 has-text-white">
                  Joe Turner
                </h1>
                <p className="subtitle has-text-white is-size-3">
                  Problem Solver / Engineer / Lifelong Learner{" "}
                </p>
                <p className="subtitle has-text-white is-size-4">
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

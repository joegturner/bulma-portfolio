import React from "react";

import "./style.scss";

const SkillSection = () => {
  return (
    <div>
      <section className="section gradientBg-green hero is-fullheight-with-navbar">
        <div className="container">
          <h1 className="title has-text-centered is-uppercase is-size-1">
            Skills
          </h1>
          <div className="tile is-ancestor">
            <div className="tile is-6 is-parent">
              <article className="tile notification is-child is-info">
                <h3 className="title">Back End</h3>

                <div className="tile is-ancestor" style={{ flex_wrap: "wrap" }}>
                  <div className="tile is-parent">
                    <p className="button is-size-6">Express</p>
                  </div>
                  <div className="tile is-parent">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://restfulapi.net/"
                      className="button is-size-6"
                    >
                      Rest API
                    </a>
                  </div>
                </div>
              </article>
            </div>
            <div className="tile is-6 is-parent">
              <article className="tile notification is-child is-info">
                <h3 className="title">Front End</h3>
                <div className="tile is-ancestor">
                  <div className="tile is-4 is-parent">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://reactjs.org/"
                      className="button is-size-6"
                    >
                      React
                    </a>
                  </div>
                  <div className="tile is-4 is-parent">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.gatsbyjs.org/"
                      className="button is-size-6"
                    >
                      Gatsby
                    </a>
                  </div>
                  <div className="tile is-4 is-parent">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://bulma.io/"
                      className="button is-size-6"
                    >
                      >Bulma
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-6 is-parent">
              <article className="tile notification is-child is-info">
                <h3 className="title">Development</h3>

                <div className="tile is-ancestor" style={{ flex_wrap: "wrap" }}>
                  <div className="tile is-parent">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.javascript.com/"
                      className="button is-size-6"
                    >
                      Javascript
                    </a>
                  </div>
                  <div className="tile is-parent">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://expressjs.com/"
                      className="button is-size-6"
                    >
                      CSS
                    </a>
                  </div>
                  <div className="tile is-parent">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://nodejs.org/en/"
                      className="button is-size-6"
                    >
                      Node
                    </a>
                  </div>
                  <div className="tile is-parent">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://git-scm.com/"
                      className="button is-size-6"
                    >
                      Git
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-6 is-parent">
              <article className="tile notification is-child is-info">
                <h3 className="title">Database</h3>

                <div className="tile is-ancestor" style={{ flex_wrap: "wrap" }}>
                  <div className="tile is-parent">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://expressjs.com/"
                      className="button is-size-6"
                    >
                      SQL
                    </a>
                  </div>
                  <div className="tile is-parent">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://sequelize.org/"
                      className="button is-size-6"
                    >
                      Sequelize ORM
                    </a>
                  </div>
                  <div className="tile is-parent">
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.sqlite.org/index.html"
                      className="button is-size-6"
                    >
                      Sqlite
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillSection;

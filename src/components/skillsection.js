import React from "react";

import "./style.scss";

const SkillSection = () => {
  return (
    <React.Fragment>
      <a className="anchor" id="skills"></a>
      <section className="section gradientBg-skills hero is-fullheight-with-navbar">
        <div className="container">
          <h1
            id="section-title"
            className="title has-text-centered is-uppercase is-size-1"
          >
            Skills
          </h1>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <article
                id="skill-card"
                className="tile notification is-child is-info"
              >
                <h3 className="title">Back End</h3>

                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <p className="tag is-size-6">Express</p>
                  </div>
                  <div className="tile is-parent">
                    <p className="tag is-size-6">Rest API</p>
                  </div>
                </div>
              </article>
            </div>
            <div className="tile is-6 is-parent">
              <article
                id="skill-card"
                className="tile notification is-child is-info"
              >
                <h3 className="title">Front End</h3>
                <div className="tile is-ancestor">
                  <div className="tile is-parent">
                    <p className="tag is-size-6">React</p>
                  </div>
                  <div className="tile is-parent">
                    <p className="tag is-size-6">Gatsby</p>
                  </div>
                  <div className="tile is-parent">
                    <p className="tag is-size-6">Bulma</p>
                  </div>
                  <div className="tile is-parent">
                    <p className="tag is-size-6">GraphQL</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-6 is-parent">
              <article
                id="skill-card"
                className="tile notification is-child is-info"
              >
                <h3 className="title">Development</h3>

                <div className="tile is-ancestor" style={{ flex_wrap: "wrap" }}>
                  <div className="tile is-parent">
                    <p className="tag is-size-6">Javascript</p>
                  </div>
                  <div className="tile is-parent">
                    <p className="tag is-size-6">CSS</p>
                  </div>
                  <div className="tile is-parent">
                    <p className="tag is-size-6">Node</p>
                  </div>
                  <div className="tile is-parent">
                    <p className="tag is-size-6">Git</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-6 is-parent">
              <article
                id="skill-card"
                className="tile notification is-child is-info"
              >
                <h3 className="title">Database</h3>

                <div className="tile is-ancestor" style={{ flex_wrap: "wrap" }}>
                  <div className="tile is-parent">
                    <p className="tag is-size-6">SQL</p>
                  </div>
                  <div className="tile is-parent">
                    <p className="tag is-size-6">Sequelize ORM</p>
                  </div>
                  <div className="tile is-parent">
                    <p className="tag is-size-6">Sqlite</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SkillSection;

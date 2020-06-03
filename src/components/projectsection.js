import React, { Component } from "react";

import "./style.scss";
import Image from "./image";

class ProjectSection extends Component {
  state = {
    showModal: null,
  };

  renderTechs(techs) {
    let jsx = "";
    for (let i = 0; i < techs.length; i++) {
      if (i === 0) {
        jsx = techs[i];
      } else {
        jsx = jsx + " / " + techs[i];
      }
    }

    return <h3>{jsx}</h3>;
  }

  renderProjects() {
    let jsx = [];
    let first = 0;

    const { projects } = this.props;

    for (let sets = 1; sets <= 3; sets++) {
      let inner = [];

      for (let j = first; j <= first + 2; j++) {
        inner.push(
          <div key={projects[j].index} className="tile is-4 is-parent">
            <article className="tile is-child notification is-info has-text-centered">
              <p className="title">{projects[j].project_name}</p>
              <p className="subtitle">
                {this.renderTechs(projects[j].technologies)}
              </p>
              <figure className="image">
                <Image imageData={projects[j].cover_image} />
              </figure>
              <div className="tile notification is-child">
                <button
                  className="is-size-3"
                  onClick={() => this.toggleModal(j)}
                >
                  Learn more
                </button>
              </div>
            </article>
          </div>
        );
      }
      jsx.push(<div className="tile is-ancestor">{inner}</div>);
      first += 3;
    }
    return jsx;
  }

  toggleModal = (index) => {
    this.setState({ showModal: index });
  };

  closeModal = () => {
    this.setState({ showModal: null });
  };

  renderProjModal = () => {
    const index = this.state.showModal;

    if (index !== null) {
      const project = this.props.projects[index];

      return (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">{project.project_name}</p>
              <button
                className="delete"
                aria-label="close"
                onClick={() => this.closeModal()}
              ></button>
            </header>
            <section className="modal-card-body">
              <div className="tile is-ancestor">
                <div className="tile is-parent">
                  <article className="tile is-child notification is-info has-text-centered">
                    <p className="is-size-5">{project.description}</p>
                    <figure className="image">
                      <Image imageData={project.cover_image} />
                    </figure>
                    <p>Utilizes: </p>
                    {this.renderTechs(project.technologies)}
                  </article>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <div className="columns">
                <div className="column">
                  <a
                    href={project.live_link}
                    target="_blank"
                    rel="noreferrer"
                    className="button is-link"
                  >
                    Live Demo
                  </a>
                </div>
                <div className="column">
                  <a
                    href={project.github_link}
                    target="_blank"
                    rel="noreferrer"
                    className="button is-link"
                  >
                    Source Code
                  </a>
                </div>
                <div className="column">
                  {" "}
                  <button className="button" onClick={() => this.closeModal()}>
                    Close
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };
  render() {
    return (
      <div>
        <section className="section is-medium has-text-white gradientBg-grey">
          <div className="container">
            <h1 className="has-text-centered is-uppercase is-size-1">
              Projects
            </h1>
            {this.renderProjects()}
            {this.renderProjModal()}
          </div>
        </section>
      </div>
    );
  }
}

export default ProjectSection;

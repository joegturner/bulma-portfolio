import React, { Component } from "react";

import "./style.scss";
import Image from "./image";

class ProjectSection extends Component {
  state = {
    showModal: null,
  };

  renderTechs(techs) {
    let jsx = [];
    for (let i = 0; i < techs.length; i++) {
      jsx.push(
        <span key={i} className="tag is-link is-medium">
          {techs[i]}
        </span>
      );
    }
    return <div className="tags is-centered">{jsx}</div>;
  }

  renderProjects() {
    let jsx = [];

    const { projects } = this.props;
    let inner = [];
    if (projects) {
      for (let i = 0; i < projects.length; i++) {
        inner.push(
          <div key={i} className="column is-4">
            <article id="proj-card" className="card is-info has-text-centered">
              <p className="is-size-4">{projects[i].project_name}</p>
              <div className="content">
                <button
                  className="proj-button button is-light is-size-6"
                  onClick={() => this.toggleModal(i)}
                >
                  Learn more
                </button>
              </div>

              <figure className="content image">
                <Image imageData={projects[i].cover_image} />
              </figure>
              {/* <div id="proj-techs" className="content"> */}
              {this.renderTechs(projects[i].technologies)}
              {/* </div> */}
            </article>
          </div>
        );
      }
    }

    jsx.push(
      <div key={100} className="columns is-multiline">
        {inner}
      </div>
    );

    return jsx;
  }

  toggleModal = (index) => {
    const html = document.querySelector("html");
    html.classList.add("is-clipped");
    this.setState({ showModal: index });
  };

  closeModal = () => {
    const html = document.querySelector("html");
    html.classList.remove("is-clipped");
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
            <header id="proj-card" className="modal-card-head">
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
                  <article className="tile is-child has-text-black has-text-centered">
                    <p className="is-size-5">{project.description}</p>
                    <figure className="image box">
                      <Image imageData={project.cover_image} />
                    </figure>
                    <p>Utilizes: </p>
                    {this.renderTechs(project.technologies)}
                  </article>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot tile is-ancestor">
              <div className="tile is-parent is-6">
                <a
                  href={project.live_link}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Live Demo
                </a>
                <a
                  href={project.github_link}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Source Code
                </a>
              </div>

              <div className="tile is-parent is-6">
                {" "}
                <span className="button" onClick={() => this.closeModal()}>
                  Close
                </span>
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
      <React.Fragment>
        <a className="anchor" id="projects"></a>
        <section className="section has-text-black gradientBg-projects">
          <div className="container">
            <h1
              id="section-title"
              className="has-text-centered is-uppercase is-size-1"
            >
              Projects
            </h1>
            {this.renderProjects()}
            {this.renderProjModal()}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ProjectSection;

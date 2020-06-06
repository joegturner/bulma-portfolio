import React, { Component } from "react";

import "./style.scss";
import Image from "./image";
import AOS from "aos";
class ProjectSection extends Component {
  state = {
    showModal: null,
  };

  componentDidMount() {
    AOS.init();
    const body = document.querySelector("body");
    body.addEventListener("click", (event) => {
      this.closeModal(event.target);
    });
  }

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

    let offset = 100;
    const { projects } = this.props;
    let inner = [];
    if (projects) {
      for (let i = 0; i < projects.length; i++) {
        if (i > 5) {
          offset = 80 * (i - 6);
        } else if (i > 2) {
          offset = 80 * (i - 3);
        } else {
          offset = 80 * i;
        }

        inner.push(
          <div
            key={i}
            data-aos="flip-up"
            data-aos-offset={offset}
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos-anchor-placement="top-bottom"
            className="column is-4"
          >
            <article id="proj-card" className="card is-info has-text-centered">
              <p
                id="h1-font"
                className="has-text-black has-text-weight-bold is-size-4"
              >
                {projects[i].project_name}
              </p>
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

              {this.renderTechs(projects[i].technologies)}
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

  closeModal = (target) => {
    const html = document.querySelector("html");
    const modal = document.querySelector("#proj-modal");

    if (
      target.className === "modal-background" ||
      target.id === "close-modal"
    ) {
      if (modal) {
        modal.classList.remove("animate__zoomIn");
        modal.classList.add("animate__zoomOut");

        html.classList.remove("is-clipped");
      }

      setTimeout(() => {
        modal.classList.remove("is-active");
        this.setState({ showModal: null });
      }, 500);
    }
  };

  rendorActiveModal = () => {
    const index = this.state.showModal;
    if (index !== null) {
      const project = this.props.projects[index];

      return (
        <div
          id="proj-modal"
          className="modal is-active animate__animated animate__zoomIn"
        >
          <div className="modal-background"></div>
          <div className="modal-card">
            <header id="proj-card" className="modal-card-head">
              <p className="modal-card-title">{project.project_name}</p>
              <button
                id="close-modal"
                className="delete"
                aria-label="close"
                onClick={(event) => this.closeModal(event.target)}
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
                    <p className="is-size-4">Utilizes: </p>
                    {this.renderTechs(project.technologies)}
                  </article>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <div className="">
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
                </a>{" "}
                <span
                  id="close-modal"
                  className="button is-hidden-mobile"
                  onClick={(event) => this.closeModal(event.target)}
                >
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
    const index = this.state.showModal;
    let project = null;

    if (index !== null) {
      project = this.props.projects[index];
    }
    return (
      <React.Fragment>
        <div className="anchor" id="projects"></div>
        <section className="section has-text-black gradientBg-projects">
          <div className="container">
            <h1 id="section-title" className="has-text-centered is-size-1">
              Projects
            </h1>
            {this.renderProjects()}

            {this.rendorActiveModal()}
          </div>
        </section>
        <section className="hero section-edge-2"></section>
      </React.Fragment>
    );
  }
}

export default ProjectSection;

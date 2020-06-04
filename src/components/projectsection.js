import React, { Component } from "react";

import "./style.scss";
import Image from "./image";

class ProjectSection extends Component {
  state = {
    showModal: null,
    prevIndex: null,
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
    // const modal = document.querySelector("#proj-modal");
    // console.log(modal);
    // if (modal) {
    //   modal.classList.remove("animate__fadeOut");
    //   modal.classList.add("animate__fadeIn");
    //   modal.classList.add("is-active");
    // }

    const html = document.querySelector("html");
    html.classList.add("is-clipped");
    this.setState({ showModal: index });

    // this.setState({ prevIndex: null });
  };

  closeModal = () => {
    // const modal = document.querySelector("#proj-modal");
    // console.log(modal);
    // modal.classList.remove("animate__fadeIn");
    // modal.classList.add("animate__fadeOut");

    const html = document.querySelector("html");
    html.classList.remove("is-clipped");
    this.setState({ showModal: null });

    const currentIndex = this.state.showModal;
    this.setState({ prevIndex: currentIndex });
  };

  // setModal = () => {
  //   const modal = document.querySelector("#proj-modal");
  //   if (modal) {
  //     const active = modal.classList.value.includes("animate__fadeOut");
  //     if (active) {
  //       modal.classList.remove("is-active");
  //       this.setState({ showModal: null });
  //     }
  //   }
  //   console.log(modal);
  // };

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
                  className="button is-hidden-mobile"
                  onClick={() => this.closeModal()}
                >
                  Close
                </span>
              </div>

              {/* <div className="tile is-parent is-6">
                  {" "}
                  <span className="button" onClick={() => this.closeModal()}>
                    Close
                  </span>
                </div> */}
            </footer>
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  renderHiddenModal = () => {
    const index = this.state.showModal;
    const prevIndex = this.state.prevIndex;

    if (index === null && prevIndex !== null) {
      const project = this.props.projects[prevIndex];
      // this.setState({ prevIndex: null });

      return (
        <div
          id="proj-modal"
          className="modal animate__animated animate__fadeOut"
        >
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
                  className="button is-hidden-mobile"
                  onClick={() => this.closeModal()}
                >
                  Close
                </span>
              </div>

              {/* <div className="tile is-parent is-6">
                  {" "}
                  <span className="button" onClick={() => this.closeModal()}>
                    Close
                  </span>
                </div> */}
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

            {/** Start of Modal */}
            {this.rendorActiveModal()}
            {/* {this.renderHiddenModal()} */}
            {/** End of Modal */}
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default ProjectSection;

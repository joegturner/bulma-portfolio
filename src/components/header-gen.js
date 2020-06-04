import React from "react";

import "./style.scss";
import scrollIcon from "../images/scroll-down-icon.jpg";

const HeaderGen = () => {
  const testHeaders = [
    { idTag: "name-text-1", font: "Bungee Inline" },
    { idTag: "name-text-2", font: "Vollkorn" },
    { idTag: "name-text-3", font: "Bowlby One SC" },
    { idTag: "name-text-4", font: "Major Mono Display" },
    { idTag: "name-text-5", font: "Oswald" },
    { idTag: "name-text-6", font: "Mukta" },
    { idTag: "name-text-7", font: "Libre Baskerville" },
    { idTag: "name-text-8", font: "News Cycle" },
    { idTag: "name-text-9", font: "Encode Sans" },
    { idTag: "name-text-10", font: "Arimo" },
    { idTag: "name-text-11", font: "Alata" },
    { idTag: "name-text-12", font: "Permanent Marker" },
    { idTag: "name-text-13", font: "Trocchi" },
    { idTag: "name-text-14", font: "Notable" },
    { idTag: "name-text-15", font: "Cinzel Decorative" },
    { idTag: "name-text-16", font: "Fredericka the Great" },
    { idTag: "name-text-17", font: "IM Fell Double Pica SC" },
    { idTag: "name-text-18", font: "IBM Plex Sans" },
  ];

  function renderHeaders(header, index) {
    let jsx = [];

    return (
      <section className="hero gradientBg-header is-fullheight-with-navbar">
        <div className="hero-body">
          <div className="container center">
            <article className="media">
              <div className="media-content">
                <div className="content has-text-centered">
                  <h1 id={header.idTag} className="title">
                    Joe Turner
                  </h1>
                  <h1 id="h1-font" className="subtitle is-size-2">
                    Fullstack Javascript Developer{" "}
                  </h1>

                  <p className="subtitle is-size-5">
                    (this is Font #{index + 1} called: {header.font})
                  </p>
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
    );
  }

  return (
    <>{testHeaders.map((header, index) => renderHeaders(header, index))}</>
  );
};

export default HeaderGen;

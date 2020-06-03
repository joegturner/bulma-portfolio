import React from "react";

import "./style.scss";

const Navbar = () => (
  <div className="hero-head is-hidden-mobile">
    <nav className="navbar is-fixed-top is-black">
      <div className="container">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            target="_blank"
            rel="noreferrer"
            href="https://support.eji.org/give/153413/#!/donation/checkout"
          >
            <span>Black Lives Matter</span>
          </a>
        </div>
        <div id="navbarMenuHeroA" className="navbar-menu">
          <div className="navbar-end">
            <span className="navbar-item">
              <a className="button is-info is-light" href="/">
                <span>Top</span>
              </a>
            </span>
            <span className="navbar-item">
              <a className="button" href="/">
                <span>Projects</span>
              </a>
            </span>
            <span className="navbar-item">
              <a className="button" href="/">
                <span>Skills</span>
              </a>
            </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;

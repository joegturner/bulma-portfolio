import React from "react";

import "./style.scss";

import linkedInLogo from "../images/icon-linkedin.png";
import gitHubLogo from "../images/icon-github.png";

const Navbar = () => {
  function toggleNavMenu() {
    const navBar = document.querySelector("#navbarMenu");
    const active = navBar.classList.value.includes("is-active");
    console.log(active);
    if (active) {
      navBar.classList.remove("is-active");
    } else {
      navBar.classList.add("is-active");
    }
  }

  return (
    <div className="hero-head">
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
            <button
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              onClick={() => toggleNavMenu()}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div id="navbarMenu" className="navbar-menu is-black">
            <div className="navbar-end">
              <a
                onClick={() => toggleNavMenu()}
                className="navbar-item button is-black"
                href="#top"
              >
                <span>Top</span>
              </a>
              <a
                onClick={() => toggleNavMenu()}
                className="navbar-item button is-black"
                href="#projects"
              >
                <span>Projects</span>
              </a>
              <a
                onClick={() => toggleNavMenu()}
                className="navbar-item button is-black"
                href="#skills"
              >
                <span>Skills</span>
              </a>
              <a
                onClick={() => toggleNavMenu()}
                className="navbar-item button is-black"
                href="#about"
              >
                <span>About</span>
              </a>
              <a
                onClick={() => toggleNavMenu()}
                className="navbar-item button is-black"
                href="#contact"
              >
                <span>Contact</span>
              </a>
              {/* 
            <span className="navbar-item">
              <a className="button is-black" href="#top">
                <span>Top</span>
              </a>
            </span>
            <span className="navbar-item">
              <a className="button is-black" href="#projects">
                <span>Projects</span>
              </a>
            </span>
            <span className="navbar-item">
              <a className="button is-black" href="#skills">
                <span>Skills</span>
              </a>
            </span>
            <span className="navbar-item">
              <a className="button is-black" href="#about">
                <span>About</span>
              </a>
            </span>
            <span className="navbar-item">
              <a className="button is-black" href="#contact">
                <span>Contact</span>
              </a>
            </span> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

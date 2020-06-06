import React, { Component } from "react";

import "./style.scss";
import smoothscroll from "smoothscroll-polyfill";

class Navbar extends Component {
  state = {
    flag: false,
  };

  toggleNavMenu(clickedOutside = false, event) {
    const navBar = document.querySelector("#navbarMenu");
    const active = navBar.classList.value.includes("is-active");

    // dodgy logic to manage open close of nav menu
    // click nav button => open nav menu
    // close nave menu if user clicks nav button or anywhere outside of nav menu
    if (event && !this.state.flag) {
      if (active) {
        navBar.classList.remove("is-active");
      } else {
        navBar.classList.add("is-active");
        this.setState({ flag: false });
      }
    } else if (clickedOutside && !event) {
      if (active) {
        navBar.classList.remove("is-active");
        this.setState({ flag: true });
      } else {
        this.setState({ flag: false });
      }
    } else if (this.state.flag && event) {
      this.setState({ flag: false });

      return null;
    } else {
      return null;
    }
  }

  mobileNavMenu(clickedOutside = false, target = "#", event) {
    const navBar = document.querySelector("#navbarMenu");
    const active = navBar.classList.value.includes("is-active");

    const element = document.querySelector(target);

    element.scrollIntoView({ behavior: "smooth" });

    if (event && !this.state.flag) {
      if (active) {
        navBar.classList.remove("is-active");
      } else {
        navBar.classList.add("is-active");
        this.setState({ flag: false });
      }
    } else if (clickedOutside && !event) {
      if (active) {
        navBar.classList.remove("is-active");
        this.setState({ flag: true });
      } else {
        this.setState({ flag: false });
      }
    } else if (this.state.flag && event) {
      this.setState({ flag: false });

      return null;
    } else {
      return null;
    }
  }

  renderNavMenuType1() {
    return (
      <React.Fragment>
        <a
          onClick={() => this.toggleNavMenu()}
          className="navbar-item button is-black"
          href="#top"
        >
          <span>Top</span>
        </a>
        <a
          onClick={() => this.toggleNavMenu()}
          className="navbar-item button is-black"
          href="#projects"
        >
          <span>Projects</span>
        </a>
        <a
          onClick={() => this.toggleNavMenu()}
          className="navbar-item button is-black"
          href="#skills"
        >
          <span>Skills</span>
        </a>
        <a
          onClick={() => this.toggleNavMenu()}
          className="navbar-item button is-black"
          href="#about"
        >
          <span>About</span>
        </a>
        <a
          onClick={() => this.toggleNavMenu()}
          className="navbar-item button is-black"
          href="#contact"
        >
          <span>Contact</span>
        </a>
      </React.Fragment>
    );
  }
  renderNavMenuType2() {
    return (
      <React.Fragment>
        <div
          onClick={() => this.mobileNavMenu(false, "#top")}
          className="navbar-item button is-black"
        >
          <span>Top</span>
        </div>
        <div
          onClick={() => this.mobileNavMenu(false, "#projects")}
          className="navbar-item button is-black"
          href="#projects"
        >
          <span>Projects</span>
        </div>
        <div
          onClick={() => this.mobileNavMenu(false, "#skills")}
          className="navbar-item button is-black"
        >
          <span>Skills</span>
        </div>
        <div
          onClick={() => this.mobileNavMenu(false, "#about")}
          className="navbar-item button is-black"
        >
          <span>About</span>
        </div>
        <div
          onClick={() => this.mobileNavMenu(false, "#contact")}
          className="navbar-item button is-black"
        >
          <span>Contact</span>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    const body = document.querySelector("body");
    body.addEventListener("click", () => {
      this.toggleNavMenu(true);
    });
    // kick off the polyfill!
    smoothscroll.polyfill();
  }

  render() {
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
                className="navbar-burger is-black"
                aria-label="menu"
                aria-expanded="false"
                onClick={(event) => this.toggleNavMenu(false, event)}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </button>
            </div>
            <div id="navbarMenu" className="navbar-menu is-black">
              <div className="navbar-end">{this.renderNavMenuType2()}</div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

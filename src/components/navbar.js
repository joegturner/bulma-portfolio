import React, { Component } from "react";

import "./style.scss";

class Navbar extends Component {
  state = {
    flag: false,
  };

  toggleNavMenu(clickedOutside = false, event) {
    const navBar = document.querySelector("#navbarMenu");
    const active = navBar.classList.value.includes("is-active");

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

  componentDidMount() {
    const body = document.querySelector("body");
    body.addEventListener("click", () => {
      this.toggleNavMenu(true);
    });
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
              <div className="navbar-end">
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
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;

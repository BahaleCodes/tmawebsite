import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              TMA
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#home" className="page-scroll">
                  Home
                </a>
              </li>
              <li>
                <a href="#our-models" className="page-scroll">
                  Our Models
                </a>
              </li>
              <li>
                <a href="#fitness" className="page-scroll">
                  Fitness
                </a>
              </li>
              <li>
                <a href="#workshop" className="page-scroll">
                  Workshops
                </a>
              </li>
              <li>
                <a href="#benefits" className="page-scroll">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#faq" className="page-scroll">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#applications" className="page-scroll">
                  Applications
                </a>
              </li>
              <li>
                <a href="#sponsors" className="page-scroll">
                Sponsors
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;

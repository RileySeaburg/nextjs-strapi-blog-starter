import React, { Component } from "react";
import Link from "next/link";

export class Nav extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" href="/#">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" href="/#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/#">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/#">
                  Pricing
                </Link>
              </li>
            </ul>
            <Link className="btn btn-outline-info my-2 my-sm-0" href="/login">
              Login
            </Link>
            <Link
              className="btn btn-outline-info my-2 my-sm-0 ml-3"
              href="/register"
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;

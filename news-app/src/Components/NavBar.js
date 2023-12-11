import React from "react";
import { Link } from "react-router-dom";
//import propTypes from 'prop-types'

const NavBar = (props) => {
  let { mode, toggleMode } = props;
  return (
    <nav
      className="navbar fixed-top navbar-expand-lg bg-body-tertiary"
      data-bs-theme={`${mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          News Sansar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/general">
                    General
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/health">
                    Health
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/science">
                    Science
                  </Link>
                </li>
                {/* <Linki><hr className="dropdown-dto e r"/></Linki> */}
                <li>
                  <Link className="dropdown-item" to="/sports">
                    Sports
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              mode === "light" ? "dark" : "light"
            }`}
            style={{ marginRight: "75px" }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={toggleMode}
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

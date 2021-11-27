import React from "react";
import Logo from "../assets/logo.png";
import Style from "../components/css/Navbar.css"

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#211F1F'}}>
        <div className="container-fluid">
            <a className="navbar-brand" href="../pages/Home.js">
              <img src={Logo} height={50} width={50} />
            </a>
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

          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >

            <form className="d-flex mx-auto" style={{width: '60%'}}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                <i class="fas fa-search"></i>
              </button>
            </form>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-right-4">
              <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-outline-primary mx-2 my-1"
                >
                  <i className="fas fa-shopping-cart"></i>
                  <span class='badge badge-warning' id='lblCartCount'>4</span>
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="btn btn-outline-success mx-2 my-1"
                  type="submit"
                >
                  Login
                </button>
              </li>
              <li className="nav-item mx-auto">
                <button
                  className="btn btn-outline-success mx-2 my-1"
                  type="submit"
                >
                  Sign Up
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

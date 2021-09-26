import React from "react";

const Header = () => {
  return (
    <div id="header" className="header-section">
      <nav className="navbar navbar-expand-lg   navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold " href="#header">
            Dev
            <span className="text-dark bg-warning ms-1 rounded-1 px-1">
              hub
            </span>
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
          <div className="text-end">
            <div
              className="collapse navbar-collapse ms-auto "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#header"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#header">
                    Developers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#header">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#header">
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="m-5">
        <h1 className="p-4">
          welcome to{" "}
          <span className="fw-bold">
            Dev
            <span className="text-dark bg-warning ms-1 rounded-1 px-2">
              hub
            </span>
          </span>{" "}
        </h1>
        <h2>Hire best developer for your projects</h2>
        <h3>Budget: 100 Million</h3>
      </div>
    </div>
  );
};

export default Header;

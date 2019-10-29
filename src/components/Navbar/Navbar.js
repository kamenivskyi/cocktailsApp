import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <Link to="/" className="navbar-brand">
        Cocktail-app
      </Link>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/">
              Alcoholic
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/">
              No alcoholic
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

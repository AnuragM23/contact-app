import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
        <div className="container">
          <Link to={'/'} className="navbar-brand">
            <FontAwesomeIcon icon={faMobile} className="text-warning me-1"/>
            Contact <span className="text-warning">Manager</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

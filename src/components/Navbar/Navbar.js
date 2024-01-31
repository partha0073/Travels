import React from "react";
import "./navbar.css";
import { SiYourtraveldottv } from "react-icons/si";

function Navbar() {
  return (
    <section className="navBarSection">
      <div className="header">
        {/* logo */}
        <div className="logoDiv">
          <a href="/" className="logo">
            <h1 className="flex">
              <SiYourtraveldottv className="icon" /> SR Travels
            </h1>
          </a>
        </div>

        {/* ---------nav-------------- */}

        <div className="navbar"></div>
      </div>
    </section>
  );
}

export default Navbar;

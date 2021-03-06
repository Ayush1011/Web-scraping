import React, { useState, UseEffect } from "react";
import SearchBar from "../Component/SearchBar";
import "./Collapsed_Navbar.scss";
import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Collapsed_Navbar() {
  const [NavbarOpen, setNavbarOpen] = useState(false);

  function ToggleNavbar() {
    setNavbarOpen(!NavbarOpen);
  }

  return (
    <div className="Collapsed_Navbar">
      <div className="Navbar--Parent--container">
        <div className="Navbar--Section--one">
          <img src="assets/Logo.png" />
        </div>

        <div className="Navbar--Section--two" onClick={() => ToggleNavbar()}>
          <img src="assets/Hamburger.png" />
        </div>
      </div>

      {NavbarOpen ? (
        <div className="Collapsed_Navbar--Maincontainer">
          <div className="Navbar-Collapsed-Item">
          <a href="/" style={{textDecoration:"none"}}><span>Home</span></a>
                    </div>

          <div className="Navbar-Collapsed-Item">
            <a hrefo="/product" style={{textDecoration:"none"}}><span>Products</span></a>
          </div>

          <div className="Navbar-Collapsed-Item">
          <a href="/" style={{textDecoration:"none"}}><span>Liked</span></a>        
            </div>

        <div className="Main-search-container">
          <div className="Collapsed_Navbar--input--box">
            <input className="Collaspsed--search--box" />

            <div className="Collaspsed--search--button">
              <img src="assets/vectorsearch.png" />
            </div>
          </div>
        </div>
        </div>
      ) : (
        <div className="Empty_Navbar"></div>
      )}
    </div>
  );
}

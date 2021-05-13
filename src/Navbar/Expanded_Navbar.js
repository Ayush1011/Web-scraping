import React from 'react'
import "./Expanded_Navbar.scss"
export default function Expanded_Navbar() {
    return (
        <div className="Navbar--MainContainer">
        <nav className="nav-container">
          <section className="section--one">
            <img src="assets/Logo.png" />
          </section>
  
          <section className="section--two">
            <div className="nav-item">
              <span className="nav-text">Home</span>
            </div>
  
            <div className="nav-item">
              <span className="nav-text">Home</span>
            </div>
  
            <div className="nav-item">
              <span className="nav-text">Home</span>
            </div>
  
            <div className="navbar-input--box">
              <input className="navbar--input" />
              <div className="navbar--search">
                <img src="assets/vectorsearch.png" />
              </div>
            </div>
          </section>
        </nav>
      </div>
    )
}

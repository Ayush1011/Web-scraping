import React from "react";
import "./Navbar.scss";
export default function Navbar() {
  return (
    <div className="Navbar--MainContainer">
      <nav className="nav-container">
        
        <section className="section--one">
            <img src="assets/Logo.png"/>
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
            
            <div className="nav-item">
            <span className="nav-text">Home</span>
            </div>

        </section>

      </nav>
    </div>
  );
}

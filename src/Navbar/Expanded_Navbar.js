import React from 'react'
import { Link } from 'react-router-dom'
import "./Expanded_Navbar.scss"
export default function Expanded_Navbar() {
    return (
        <div className="Navbar--MainContainer">
        <nav className="nav-container">

          <section className="section--one">
              <a href="/">
              <img src="assets/Logo.png" to="/" className="img-Logo" style={{height:"3rem"}} />
              </a>
          
          </section>
  
          <section className="section--two">
            <div className="nav-item">
            <Link to="/Liked" style={{textDecoration:"none"}}><span className="nav-text">Liked</span></Link>
            </div>
  
            <div className="nav-item">
            <Link to="/List" style={{textDecoration:"none"}}><span className="nav-text">List</span></Link>
            </div>
  
            <div className="nav-item">
              <Link to="/item" style={{textDecoration:"none"}}><span className="nav-text">Item</span></Link>
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

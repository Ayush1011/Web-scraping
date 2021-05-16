import React from "react";
import SearchBar from "../../Component/SearchBar";
import { content } from "../../Content/Content";
import "./LandingPage.scss";




export default function LandingPage() {
  return (
    <div className="Landing--MainContainer">
      <div className="parent--section">
        <div className="Section--one">
          <section>
            <span>
              <b>
                {" "}
                Choose Product <br></br> Consedring Your
              </b>{" "}
              Personal Budget
            </span>
            <p>{content.HomeSubTitle}</p>
            <div className="Section--one--SearchBar">
              <SearchBar />
            </div>
          </section>
        </div>
        <div className="Section--two">
          <section>
            <img src="assets/Homeimage.png" />
          </section>
        </div>
      </div>
    </div>
  );
}

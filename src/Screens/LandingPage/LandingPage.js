
import React, { useRef, useEffect, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import { useSelector } from "react-redux";
import SearchBar from "../../Component/SearchBar";
import SearchContainer from "../../Containers/SearchContainer";
import { content } from "../../Content/Content";
import Navbar from "../../Navbar/Navbar";
import "./LandingPage.scss";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

const options = {
  scale: 1.2,
  speed: 1000,
  max: 30,
};


export default function LandingPage(props) {


  

  return (
    <div className="Landing--MainContainer">
       <Navbar/>
       

       <div className="All--container">
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
              <SearchContainer/>
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
    </div>
  );
}

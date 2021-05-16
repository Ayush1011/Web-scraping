import React, { useRef, useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import "./Product.scss";
import VanillaTilt from "vanilla-tilt";
import { content } from "../../Content/Content";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

function AssignHighlight() {
  var feilds = content.ProductHighlight.split("|");
  var Value = feilds.map((x) => x.concat("\n"));
  return Value;
}

export default function Product() {
  const [highlight, sethighlight] = useState();
  const Highlight = AssignHighlight();

  const options = {
    scale: 1.2,
    speed: 1000,
    max: 30,
  };
  return (
    <div className="Product-Maincontainer">
      <Navbar />

      <div className="Procuct-Parent-container">
        <div className="Product-section--one">
          <Tilt className="Tlit--box" options={options}>
            <img src="assets/product.jpeg" />
          </Tilt>
        </div>

        <div className="Product-section--two">
          <span className="Product-section--two--heading">
            MOTOROLA G40 Fusion (Dynamic Gray, 64 GB) (4 GB RAM)
          </span>
          <span className="Product-section--two--price">$ 9899.99</span>

          {Highlight.map((key, val) => (
            <span className="Product-section--two--highlight">
              {" "}
              {Highlight[val]}
            </span>
          ))}
          <div className="Product-section--two--underline"></div>
          <span className="Product-section--two--description">{content.Description}</span>
          <div className="Product-section--two--button">

              <span>Buy Now</span>

          </div>
        </div>
      </div>
    </div>
  );
}

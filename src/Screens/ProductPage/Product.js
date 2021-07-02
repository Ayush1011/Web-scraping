import React, { useRef, useEffect, useState } from "react";
import Navbar from "../../Navbar/Navbar";
import "./Product.scss";
import VanillaTilt from "vanilla-tilt";
import { content } from "../../Content/Content";
import DATA from "../../service/data";
import { useLocation } from "react-router-dom";
import axios from "axios";
import * as action from "../../service/actions/actions";
import { useDispatch, useSelector } from "react-redux";

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}

export default function Product() {
  const [highlight, sethighlight] = useState("");
  const [ProductPrice, setProductPrice] = useState("...Loading");
  const [ProductName, setProductName] = useState("...Loading");
  const [Configration, setConfigration] = useState("");
  const [Image, setImage] = useState();
  let Highlight;
  const location = useLocation();
  const dispatch = useDispatch();



  // Selector for both company

  const amazonItems = useSelector((state) => state.cardItems.amazon);
  
  const flipItems = useSelector((state) => state.cardItems.flipkart);



  

  // FlipKart Assign State

  useEffect(() => {
    if(flipItems.flipkart!=undefined){
    setProductPrice(flipItems.flipkart[0].Price);
    setProductName(flipItems.flipkart[0].ProductName);
    sethighlight(flipItems.flipkart[0].Description);
    setConfigration(flipItems.flipkart[0].Configration);
    }
  }, [flipItems]);


  // Amazon Assign state

  useEffect(() => {
    if(amazonItems.amazon!=undefined){
    setProductPrice(amazonItems.amazon[0].Price);
    setProductName(amazonItems.amazon[0].ProductName);
    sethighlight(amazonItems.amazon[0].Description);
    setConfigration(amazonItems.amazon[0].Configration);
    }
  }, [amazonItems]);



  // Main use-effect for hit api

  const hitapicompany = (link, company) => {
    if (location.state.Company == "amazon") {
      console.log(link);
      dispatch(action.findItemAmazon(link, company));
    } else {
      dispatch(action.findItemFlipkart(link, company));
    }
  };

  useEffect(() => {
    setProductPrice("...Loading")
    setProductName("..Loading");
    sethighlight("..Loading");
    setConfigration("..Loading");
    if(location.state.ImageLink==""||location.state.ImageLink==undefined){
      setImage("https://www.google.com/url?sa=i&url=https%3A%2F%2Flallahoriye.com%2F%3Fproduct%3Dproduct-5&psig=AOvVaw213vVSZ4fKvqnvoUTO_VHh&ust=1625329725944000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCOD_3JrnxPECFQAAAAAdAAAAABAD")
    }else{
      setImage(location.state.ImageLink);
    }
    
    hitapicompany(location.state.detail, location.state.Company);
  }, [location.state.ImageLink]);




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
            <img src={Image} />
          </Tilt>
        </div>

        <div className="Product-section--two">
          <span className="Product-section--two--heading">{ProductName}</span>
          <span className="Product-section--two--price"> {ProductPrice}</span>

          {highlight.split("|")?.map((val, index) => (
            <span className="Product-section--two--highlight"> {val}</span>
          ))}
          <div className="Product-section--two--underline"></div>
          <span className="Product-section--two--description">
            {Configration}
          </span>
          <a
            href={location.state.detail}
            className="Product-section--two--button"
          >
            <div>
              <span>Buy Now</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

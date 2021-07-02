import React, { useRef, useEffect, useState } from "react";
import SearchBar from "../../Component/SearchBar";
import { content } from "../../Content/Content";
import Navbar from "../../Navbar/Navbar";
import "./ListProduct.scss";
import VanillaTilt from "vanilla-tilt";
import Amazon_banner from "../../Component/Amazon_banner";
import Flipkart_banner from "../../Component/Flipkart_banner";
import SearchContainer from "../../Containers/SearchContainer";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Component/Loading";
import DATA from "../../service/data";

import { useParams } from "react-router";
import { BrowserRouter, Route, Link,Redirect,useHistory } from "react-router-dom";

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

export default function ListProduct(props) {
  let data = useSelector((state) => state.cardItems.items);
  const { search } = useParams();
 
 
  const history = useHistory();

  if (data.length == 0) {
    data = DATA;
  }

const handlerouteFlipkart=(link,ImageLink)=>{
  
  history.push({
    pathname: '/item',
    search: '?query=abc',
    state: { detail:link,
             ImageLink:ImageLink,
             Company:"flipkart"

    
    }
});
}


const handlerouteAmazon=(link,ImageLink)=>{
  
  history.push({
    pathname: '/item',
    search: '?query=abc',
    state: { detail:link,
             ImageLink:ImageLink,
             Company:"amazon"

    
    }
});
}


useEffect(() => {
  


}, data.flipkart)




 

  return (
    <div className="List--Maincontainer">
      <Navbar />
      <div className="List--Parent--Container">

      


        <div className="Search--Container">
          <SearchContainer />
        </div>

        {data.flipkart.map((x) => (
          <div className="List--Section--Container" onClick={()=>handlerouteFlipkart(x.ProductLink,x.ImageLink)}>
            <div className="List--parent--section--container" >
              <div className="List--section--one" >
                <Tilt options={options} className="List--section--one--tilt">
                  <img src={x.ImageLink} />
                </Tilt>
              </div>

              <div className="List--section--two">
                <a href={x.ProductLink} className="List--section--two--heading">
                  {x.ProductName}
                </a>

                <span className="List--section--two--price">{x.price}</span>
                <span className="List--section--two--description">
                  {x.Description}
                </span>
                <Flipkart_banner />
              </div>
            </div>
          </div>
        ))}

        {data.amazon.map((x) => (
          <div className="List--Section--Container" onClick={()=>handlerouteAmazon(x.ProductLink,x.ImageLink)}>
            <div className="List--parent--section--container">
              <div className="List--section--one">
                <Tilt options={options} className="List--section--one--tilt">
                  <img src={x.ImageLink} />
                </Tilt>
              </div>

              <div className="List--section--two">
                <span  className="List--section--two--heading">
                  {x.ProductName}
                </span>

                <span className="List--section--two--price">
                  &#x20b9; {x.price}
                </span>

                <Amazon_banner />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import React,{useState,useEffect} from "react";
import Collapsed_Navbar from "./Collapsed_Navbar";
import Expanded_Navbar from "./Expanded_Navbar";
import "./Navbar.scss";


function View_Width(){

    const [width, setwidth] = useState(window.innerWidth);
   useEffect(() => {
       const handleResize=()=>{ 
       
           setwidth(window.innerWidth);
       };
       window.addEventListener("resize",handleResize);
   }, []);
   return width;
 }   

export default function Navbar() {

        
    const width = View_Width();
     

  return (
    
    <div className="All--navbar">

        {
        width<756
        ?<Collapsed_Navbar/> 
        : <Expanded_Navbar/>
        }

    </div>


  );
}

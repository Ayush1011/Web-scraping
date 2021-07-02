import React,{useState,useEffect} from "react";
import "./SearchBar.scss";
import { BrowserRouter, Route, Link,Redirect,useHistory } from "react-router-dom";
import { content } from "../Content/Content";
import * as searchAction from '../service/actions/actions';
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";

export default function SearchBar() {
const history = useHistory();
const [search, setSearch] = useState("Mobile");
const dispatch = useDispatch();
const [isload, setisload] = useState()
const data = useSelector(state => state.cardItems.items);
let showloading=useSelector(state=>state.cardItems.showloading);
let hideloading=useSelector(state=>state.cardItems.hideloading);



const setloading = ()=>{ 
  alert("wait for few second Till we load your product")


}
const handleSearch = () => {
 // console.log(search)
  
  dispatch(searchAction.addtoContent(search))


  // window.location.replace(`/list`)
  history.replace("/List")
}
const handleKeyPress=(e)=> {
  if (e.key === 'Enter') {
    alert('Enter pressed')
  }
}


useEffect(() => {
  setisload(false)
  
  
}, data.flipkart)


  return (
    <div className="SearchBar-MainContainer">

     
      <input className="search--box" type="text"  onChange={e => setSearch(e.target.value)}
       onKeyPress={event => {
        if (event.key === 'Enter') {
          handleSearch()
          setloading()
        
          
        }
      }}

 />

      <div className="search--button"  onClick={()=>{
        handleSearch()
        setloading()
        
      }}>
        <img src="assets/vectorsearch.png" />
      </div>
    </div>
  );
}

import React,{useState} from "react";
import "./SearchBar.scss";
import { BrowserRouter, Route, Link,Redirect,useHistory } from "react-router-dom";
import { content } from "../Content/Content";
import * as searchAction from '../service/actions/actions';
import { useDispatch, useSelector } from "react-redux";

export default function SearchBar() {
const history = useHistory();
const [search, setSearch] = useState("Mobile");
const dispatch = useDispatch();
const data = useSelector(state => state.cardItems.items);

const handleSearch = () => {
  console.log(search)
  dispatch(searchAction.addtoContent(search))
  // window.location.replace(`/list`)
  history.replace("/List")
}
const handleKeyPress=(e)=> {
  if (e.key === 'Enter') {
    alert('Enter pressed')
  }
}



  return (
    <div className="SearchBar-MainContainer">
      <input className="search--box" type="text"  onChange={e => setSearch(e.target.value)}
       onKeyPress={event => {
        if (event.key === 'Enter') {
          handleSearch()
        }
      }}
 />

      <div className="search--button"  onClick={handleSearch}>
        <img src="assets/vectorsearch.png" />
      </div>
    </div>
  );
}

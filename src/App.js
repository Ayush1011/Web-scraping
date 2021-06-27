import logo from "./logo.svg";
import "./App.css";
import Home from "./Screens/Home";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Product from "./Screens/ProductPage/Product";
import ListProduct from "./Screens/ListProduct/ListProduct";
import MainContainer from "./Containers/MainContainer";
import ListProductContainer from "./Containers/ListProductContainer";
import LandingPage from "./Screens/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={LandingPage} />       
        <Route path="/item" exact component={Product} />
        <Route path="/List" exact component={ListProduct} />
      </BrowserRouter>
    </div>
  );
}

export default App;

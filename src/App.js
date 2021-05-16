import logo from './logo.svg';
import './App.css';
import Home from './Screens/Home';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Product from './Screens/ProductPage/Product';
import ListProduct from './Screens/ListProduct/ListProduct';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
     <Route path="/" exact component={Home} />
     <Route path="/item" component={Product}/>
     <Route path="/List" component={ListProduct}/>
    
     </BrowserRouter>
    </div>
  );
}

export default App;

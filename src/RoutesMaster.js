import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from "react-router-dom";
import ProductListing from './ProductListing';
import ProductDetail from './ProductDetail';
import Cart from './Cart';

function RoutesMaster() {
  return (
    <div className = "center">
        <Route exact path = "/">
     <ProductListing></ProductListing>
     </Route>
     <Route exact path = "/products/:productId">
    <ProductDetail></ProductDetail>
     </Route>
     <Route exact path = "/cart">
        <Cart></Cart>
     </Route>
    </div>
  );
}

export default RoutesMaster;

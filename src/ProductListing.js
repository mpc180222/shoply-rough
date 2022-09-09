import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import "./productListing.css"
import ProductListingCard from "./ProductListingCard";

function ProductList() {

    const inventoryItems = useSelector(st => st.inventory);
    const cart = useSelector(st => st.cart);
    const dispatch = useDispatch();

    const addToCart = (evt) => {
      
        let newItem = inventoryItems.find(item => item.id === evt.target.id)
        dispatch({ type: "ADD-ITEM",
                    payload: newItem })
    }

    const removeFromCart = (evt) => {

        let idRemove = evt.target.getAttribute('data-id')
        let idxRemove = cart.findIndex(element => element.id === idRemove)
        dispatch({ type: "REMOVE",
                    payload: idxRemove })
    }

    return(
        <div className="product-listing-container">
            <ul className="product-listing-list">
            {inventoryItems.map(item => <li><ProductListingCard key = {item.id} id = {item.id} name = {item.name} img = {item.image_url}
            price = {item.price} addToCart={addToCart} removeFromCart = {removeFromCart} 
            inCart = {cart.find(cartItem => cartItem.id === item.id) ? true : false} /></li>)}
            </ul>
                <h3>Cart Total: ${cart.reduce((acc, curr) => (acc + curr.price), 0).toFixed(2)}
                </h3>
  
        </div>
    )


}

export default ProductList;
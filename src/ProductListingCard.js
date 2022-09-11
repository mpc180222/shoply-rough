import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import "./productListingCard.css"

function ProductListingCard({key, name, price, addToCart, removeFromCart, inCart, id, img}) {
    console.log(name, inCart);


    return(
        <div className="product-listing-card">
            <h2><Link to = {`/products/${id}`}>{name}</Link></h2>
            <img src = {img} ></img>
            <p>${price.toFixed(2)}</p>
            <button id = {id} onClick = {(evt) => addToCart(evt)} >Add to cart</button>
            {inCart && <button data-id={id} onClick = {(evt) => removeFromCart(evt)}>Remove from cart</button>}

           
        </div>
    )


}

export default ProductListingCard;
import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import "./productDetail.css"

function ProductDetail(){

    const { productId } = useParams();
    const inventoryItems = useSelector(st => st.inventory);
    const displayedItem = inventoryItems.find(element=>element.id === productId);
    const cart = useSelector(st => st.cart);
    const dispatch = useDispatch();

    const addToCart = (evt) => {
      
        let newItem = inventoryItems.find(item => item.id === productId)
        dispatch({ type: "ADD-ITEM",
                    payload: newItem })
    }

    const removeFromCart = (evt) => {

        let idxRemove = cart.findIndex(element => element.id === productId)
        dispatch({ type: "REMOVE",
                    payload: idxRemove })
    }

    return(
        <div>
            <h1>{displayedItem.name}</h1>
            <img src = {displayedItem.image_url}></img>
            <p>{displayedItem.description}</p>
            <button onClick = {addToCart}>Add to cart</button>
            {cart.find(cartItem => cartItem.id === productId) && <button onClick = {removeFromCart}>Remove from cart</button>}
           
                <h3>Cart Total: ${cart.reduce((acc, curr) => (acc + curr.price), 0).toFixed(2)}
                

                </h3>

            
            
        </div>
    )




}

export default ProductDetail;
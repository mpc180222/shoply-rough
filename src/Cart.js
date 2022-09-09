import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";

function Cart() {

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

    console.log(cart)
    
    const cartSet = new Set(cart);
    console.log(cartSet)
    return(
        <div>
            <h1>test</h1>
            <ul>
            {Array.from(cartSet).map(item=> (<li>Name: {item.name} -- 
            Price: ${item.price} Qty: {cart.filter(f=>item.id===f.id).length} 
            <button id = {item.id} onClick = {(evt) => addToCart(evt)} >+</button>
            <button data-id={item.id} onClick = {(evt) => removeFromCart(evt)}>-</button> </li>)).sort((a, b) => a.item - b.item)}
            </ul>
            
                <h3>Cart Total: ${cart.reduce((acc, curr) => (acc + curr.price), 0).toFixed(2)}
                

                </h3>

            
            
        </div>
    )


}

export default Cart;
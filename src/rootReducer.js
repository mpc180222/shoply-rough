import inventoryItems from "./data.json";

const inventoryItemsArr = [];

for(let id in inventoryItems.products){
    inventoryItems.products[id] = {...inventoryItems.products[id], id}
    inventoryItemsArr.push(inventoryItems.products[id]);
}

const INIT_STATE = {inventory: inventoryItemsArr, cart: [] };

function rootReducer(state = INIT_STATE, action){


    switch(action.type){

    case "ADD-ITEM":
        return {...state, cart: [...state.cart, action.payload]  }

    case "REMOVE":
        return {...state, cart: state.cart.filter((item,i)=> i !== action.payload)}

    default:
        return state;
    }
}

export default rootReducer;
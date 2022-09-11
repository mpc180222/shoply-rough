
const inventoryItemsArr = [{id: 1, name: "tv", description: "beauty", image_url:"www.cbc.ca"},
{id: 2, name: "microwave", description: "awesome", image_url:"www.msn.ca"},
{id: 3, name: "iron", description: "gets wrinkles", image_url:"www.shop.ca"}];

const initCart = [{id: 1, name: "tv", description: "beauty", image_url:"www.cbc.ca"}]

const INIT_STATE = {inventory: inventoryItemsArr, cart: initCart };

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

it("should add an item to the cart", function (){

    expect(rootReducer(INIT_STATE, {type: "ADD-ITEM", payload: {id: 2, name: "microwave", 
    description: "awesome", image_url:"www.msn.ca"}})).toEqual({inventory: inventoryItemsArr, cart:
    [{id: 1, name: "tv", description: "beauty", image_url:"www.cbc.ca"}, {id: 2, name: "microwave", description: "awesome", image_url:"www.msn.ca"} ]})
})

it("should remove an item from the cart", function (){

    expect(rootReducer(INIT_STATE, {type: "REMOVE", payload: 0})).toEqual({inventory: inventoryItemsArr, cart: []})
})

it("should return the state in a default instance", function (){

    expect(rootReducer(INIT_STATE, {type: "NONE"})).toEqual({inventory: inventoryItemsArr, cart: initCart});


})



const redux = require("redux");
const createStore = redux.createStore;

const ADD_ITEM = 'ADD_ITEM';

const addItem = (item) => {
    return {
        type: ADD_ITEM,
        payload: item
    }
}

const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    );
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
  };

const initialState = {
    cartItems:[]
}
const cartReducer = (state = initialState,action) => {

    switch(action.type){
        case ADD_ITEM: return {
            ...state,
            cartItems:addItemToCart(state.cartItems,action.payload)

        }
        default: return state;
    }
}

const store = createStore(cartReducer);
console.log('Initial state',store.getState);
unsubscribe = store.subscribe(()=>console.log('Updated state', store.getState()));
store.dispatch(addItem({id:1,name:'Pant',price:200}));
store.dispatch(addItem({id:2,name:'Shirt',price:100}));
unsubscribe();
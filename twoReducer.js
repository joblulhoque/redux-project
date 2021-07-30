const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const buyCake = () => {
    return {
        type:BUY_CAKE,
        payload:1
    }
}

const buyIceCream = () => {
    return {
        type: BUY_ICECREAM,
        payload:2
    }
}

const initialCakeState = {
    numOfCake:10
}

const initialIceCreamState = {
    numOfIceCream: 20
}

const cakeReducer = (state = initialCakeState,action) => {

    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCake: state.numOfCake - action.payload
        }
        default: return state;

    }
}

const icecreamReducer = (state = initialIceCreamState,action) => {
    switch(action.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - action.payload
        }
        default: return state;
        
    }

}

const rootReducer = combineReducers({
cake: cakeReducer,
iceCream: icecreamReducer
});
const store = createStore(rootReducer,applyMiddleware(logger));
console.log('initial state',store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
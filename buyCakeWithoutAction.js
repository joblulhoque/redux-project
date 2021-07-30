const redux = require("redux");
const createStore = redux.createStore;


const initialState = {
    numOfCake:10
}

const reducer = (state = initialState,action) => {

    switch (action.type) {
        case "BUY_CAKE": return {
            ...state,
            numOfCake: state.numOfCake - action.payload
        }
        default: return state;

    }

}

const store = createStore(reducer);
console.log('initial state',store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()));
store.dispatch({type:"BUY_CAKE",payload:1});
store.dispatch({type:"BUY_CAKE",payload:2});
store.dispatch({type:'BUY_CAKE',payload:3});
unsubscribe();
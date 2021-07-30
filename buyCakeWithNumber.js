const redux = require("redux");
const createStore = redux.createStore;


const BUY_CAKE = 'BUY_CAKE';

const buyCake = (number) => {
    return {
        type:BUY_CAKE,
        payload:number
    }
}

const initialState = {
    numOfCake:10
}

const reducer = (state = initialState,action) => {

    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCake: state.numOfCake - action.payload
        }
        default: return state;

    }

}

const store = createStore(reducer);
console.log('initial state',store.getState());
const unsubscribe = store.subscribe(() => console.log("Updated state", store.getState()));
store.dispatch(buyCake(2));
store.dispatch(buyCake(3));
store.dispatch(buyCake(4));
unsubscribe();
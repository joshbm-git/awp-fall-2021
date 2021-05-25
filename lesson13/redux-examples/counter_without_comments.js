const {createStore} = require('redux');
const store = createStore(counter_reducer);
store.subscribe(() => console.log("Current state:", store.getState()));

// The reducer function
function counter_reducer(state = { counter: 0 }, action) {
    switch (action.type) {
        case 'INCREMENT': return { counter: state.counter + 1 };
        case 'DECREMENT': return { counter: state.counter - 1 };
        default: return state
    }
}
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'DECREMENT' });
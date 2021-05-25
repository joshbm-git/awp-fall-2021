const {createStore, applyMiddleware} = require('redux');
const {bankReducer} = require('./bank_reducer');
const thunk = require("redux-thunk").default;

// Logging middleware for the store
const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

// TODO: Import and apply 'thunk' middleware!
// TODO: 'redux-thunk' should already be in the package.json dependencies.

const store = createStore(bankReducer, applyMiddleware(logger, thunk));
store.subscribe(() => console.log("Current state:", store.getState()));

// TODO: Replace these actions with async actions that dispatch with a delay.
// TODO: Delay should be random from 0 and 5 seconds.

// Step 1: Lav to action creators "deposit_delay, withdraw_delay".

function deposit(amount) {
  function action(dispatch) {
    setTimeout(() => {
      dispatch({ type: "DEPOSIT", amount: amount})
    }, getRandomInt(5000))
  }
  return action;
}

function withdraw(amount) {
  function action(dispatch) {
    setTimeout(() => {
      dispatch({ type: "WITHDRAW", amount: amount})
    }, getRandomInt(5000))
  }
  return action;
}

store.dispatch(deposit(2000));
store.dispatch(withdraw(1000));
store.dispatch(deposit(3000));
store.dispatch(withdraw(1000));

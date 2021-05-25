function reducer(state = { amount: 0 }, action) {
    switch (action.type) {
        case 'DEPOSIT': {
            return state + action.amount;
        }
        case 'WITHDRAW': {
           return state - action.amount;
        }
        default:
            return state
    }
}

module.exports = {
    bankReducer: reducer
};

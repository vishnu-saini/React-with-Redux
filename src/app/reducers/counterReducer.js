const counterReducer = (state = {
    result: 10,
    lastValues: []
}, action) => {
    switch (action.type) {
        case 'COUNT_UP':
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
        case 'COUNT_DOWN':
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            }
            break;
    }
    return state;
}
export default counterReducer;
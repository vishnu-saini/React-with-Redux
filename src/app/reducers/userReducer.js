const userReducer = (state = [{
    firstName: "Sunil",
    lastName: "Saini",
    email: "vishnu.saini@email.com",
    hobbies: ["Table tennis", "Music"]
}], action) => {
    var newState = state.slice();
    switch (action.type) {
        case 'ADD_USER':
            newState.push(action.payload);
            break;
    }
    state = newState;
    return state;
}

export default userReducer;
var users = require('../api/users.js');

function getUsers(state = [], action) {
    var newState = [...users];
    if(action.type === "FETCH_USERS") {
        return newState;
    }
    if(action.type === "CREATE_USER") {
        let user = {
            name: action.name,
            email: action.email,
            password: action.password
        }
        newState = [...state, user];
    }
    return newState;
}

export default getUsers;
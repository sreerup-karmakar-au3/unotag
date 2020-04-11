import {createStore, combineReducers} from "redux"

import userReducer from "./reducers/userReducer"
import incomeReducer from "./reducers/incomeReducer"
import expenseReducer from "./reducers/expenseReducer"

const rootReducer = combineReducers({
    users: userReducer,
    income: incomeReducer,
    expense: expenseReducer
})

const store = createStore(rootReducer);

function stateMapper(state) {
    return state;
}

export { store, stateMapper };
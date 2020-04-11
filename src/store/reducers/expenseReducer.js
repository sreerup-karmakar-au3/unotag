import expense from '../api/expense.js'

function getExpense(state = [], action) {
    if(action.type === "FETCH_EXPENSE") {
        let newState = expense.details.filter(item => item.email === action.email);
        state = newState;
    }
    if(action.type === "ADD_EXPENSE") {
        let expenseObj = {
            email: action.email,
            month: action.month,
            date: action.date,
            amount: action.amount,
            description: action.description
        }
        let temp = state;
        temp.push(expenseObj);
        state = temp;
    }
    return state;
}

export default getExpense;
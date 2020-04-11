import income from '../api/income.js'

function getIncome(state = [], action) {
    if(action.type === "FETCH_INCOME") {
        let newState = income.details.filter(item => item.email === action.email);
        state = newState;
    }
    if(action.type === "ADD_INCOME") {
        let incomeObj = {
            email: action.email,
            month: action.month,
            date: action.date,
            amount: action.amount,
            description: action.description
        }
        let temp = state;
        temp.push(incomeObj);
        state = temp;
    }
    return state;
}

export default getIncome;
import React from 'react'
import { connect } from "react-redux"

import TableDetails from './container/tableDetails'
import { stateMapper } from '../store/store'

class ExpenseComponent extends React.Component {
    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_EXPENSE",
            email: JSON.parse(localStorage.getItem("user")).email
        })
    }

    render() {
        return (
            <div>
                {
                    (this.props.expense.length > 0) ? (
                        <TableDetails tableName="Expense" name="expense" details={this.props.expense} tableID="expenseTable"/>
                    ) : ("No expense data found")
                }
            </div>
        )
    }
}

let Expense = connect(stateMapper)(ExpenseComponent);
export default Expense;
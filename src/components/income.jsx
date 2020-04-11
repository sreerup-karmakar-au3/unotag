import React from 'react'

import { connect } from "react-redux"

import TableDetails from './container/tableDetails'
import { stateMapper } from '../store/store'

class IncomeComponent extends React.Component {
    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_INCOME",
            email: JSON.parse(localStorage.getItem("user")).email
        })
    }

    render() {
        return (
            <div>
                {
                    (this.props.income.length > 0) ? (
                        <TableDetails tableName="Income" name="income" details={this.props.income} tableID="incomeTable"/>
                    ) : ("No income data found")
                }
            </div>
        )
    }
}

let Income = connect(stateMapper)(IncomeComponent);
export default Income;
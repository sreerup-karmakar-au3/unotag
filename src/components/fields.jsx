import React from 'react'
import { connect } from "react-redux"

import { stateMapper } from '../store/store'

class FieldsComponent extends React.Component {
    state = {
        month: "January",
        account: "Income",
        date: "",
        amount: "",
        description: "",
        error: false
    }

    inputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validateForm() {
        let check = false;
        if(this.state.date === "" || this.state.amount === "" || this.state.description === "") {
            check = true;
        }
        this.setState({
            error: check
        })
        return check;
    }

    handleSubmit(e) {
        e.preventDefault();
        if(this.validateForm()) {
            return;
        }
        else {
            if(this.state.account === "Income") {
                this.props.dispatch({
                    type: "ADD_INCOME",
                    month: this.state.month,
                    date: this.state.date,
                    amount: this.state.amount,
                    description: this.state.description,
                    email: JSON.parse(localStorage.getItem("user")).email
                })
            }
            else {
                this.props.dispatch({
                    type: "ADD_EXPENSE",
                    month: this.state.month,
                    date: this.state.date,
                    amount: this.state.amount,
                    description: this.state.description
                })
            }
        }
    }

    render() {

        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <div className="d-flex justify-content-between">
                    <div className="col">
                        <label htmlFor="formMonth">Month</label>
                        <select name="month" className="custom-select" id="formMonth" onChange={(event) => this.inputChange(event)}>
                            <option defaultValue disabled>Choose...</option>
                            {
                                months.map((month, indx) => (
                                    <option key={indx} value={month}>{month}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="formAccount">Account</label>
                        <select name="account" className="custom-select" id="formAccount" onChange={(event) => this.inputChange(event)}>
                            <option defaultValue>Income</option>
                            <option>Expense</option>
                        </select>
                    </div>
                    <div className="col">
                        <label htmlFor="formDate">Date</label>
                        <input type="date" name="date" className="form-control" id="formDate" onChange={(event) => this.inputChange(event)}/>
                    </div>
                    <div className="col">
                        <label htmlFor="formAmount">Amount</label>
                        <input type="text" name="amount" className="form-control" id="formAmount" placeholder="₹" onChange={(event) => this.inputChange(event)}/>
                    </div>
                    <div className="col">
                        <label htmlFor="formDescription">Description</label>
                        <input type="text" name="description" className="form-control" id="formDescription" onChange={(event) => this.inputChange(event)}/>
                    </div>
                    <div className="col d-flex align-items-end">
                        <button type="submit" className="btn btn-primary">Add</button>
                    </div>
                </div>
            </form>
        )
    }
}

let Fields = connect(stateMapper)(FieldsComponent);
export default Fields;
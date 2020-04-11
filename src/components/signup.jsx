import React from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { stateMapper } from '../store/store'

import './styles/signUp.css'

class SignUpComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            error: false
        }
        this.validateForm = this.validateForm.bind(this);
    }

    inputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validateForm() {
        let check = false;
        if(this.state.name === "" || this.state.email === "" || this.state.password === "") {
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
            this.props.dispatch({
                type: "CREATE_USER",
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            })
            let user = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password
            }
            localStorage.setItem("user", JSON.stringify(user));
            this.props.history.push("/app");
        }
    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center signUpBody">
                <div className="col-md-4 signup">
                    {
                        this.state.error && (
                            <div className="alert alert-danger" role="alert">
                                Registration Failed
                            </div>
                        )
                    }
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label className="text-white" htmlFor="SignUpName">Name</label>
                            <input type="text" name="name" className="form-control" id="SignUpName" placeholder="Enter name" onChange={(e) => this.inputChange(e)} required/>
                        </div>
                        <div className="form-group">
                            <label className="text-white" htmlFor="SignUpEmail">Email</label>
                            <input type="email" name="email" className="form-control" id="SignUpEmail" placeholder="Enter email" onChange={(e) => this.inputChange(e)} required/>
                        </div>
                        <div className="form-group">
                            <label className="text-white" htmlFor="SignUpPassword">Password</label>
                            <input type="password" name="password" className="form-control" id="SignUpPassword" placeholder="Enter password" onChange={(e) => this.inputChange(e)} required/>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                        <Link to="/signin" className="btn btn-success btn-block" role="button">Sign In</Link>
                    </form>
                </div>
            </div>
        )
    }
}

let SignUp = connect(stateMapper)(SignUpComponent);
export default SignUp;
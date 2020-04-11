import React from 'react'
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import { stateMapper } from '../store/store'

import './styles/signIn.css'

class SignInComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: false
        }
        this.validateForm = this.validateForm.bind(this);
    }

    componentDidMount() {
        this.props.dispatch({
            type: "FETCH_USERS"
        })
    }

    inputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    validateForm() {
        let check = false;
        if(this.state.email === "" || this.state.password === "") {
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
            let result = this.props.users.filter(obj => { return obj.email === this.state.email && obj.password === this.state.password });
            if(result.length !== 0) {
                localStorage.setItem("user", JSON.stringify(result[0]));
                this.props.history.push("/app");
            }
            else {
                this.setState({
                    error: true
                })
            }
        }
    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center signInBody">
                <div className="col-md-4 signin">
                    {
                        this.state.error && (
                            <div className="alert alert-danger" role="alert">
                                Invalid User
                            </div>
                        )
                    }
                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <div className="form-group">
                            <label className="text-white" htmlFor="SignInEmail">Email</label>
                            <input type="email" name="email" className="form-control" id="SignInEmail" placeholder="Enter email" onChange={(e) => this.inputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <label className="text-white" htmlFor="SignInPassword">Password</label>
                            <input type="password" name="password" className="form-control" id="SignInPassword" placeholder="Enter password" onChange={(e) => this.inputChange(e)}/>
                        </div>
                        <button type="submit" className="btn btn-success btn-block">Sign In</button>
                        <Link to="/signup" className="btn btn-primary btn-block" role="button">Sign Up</Link>
                    </form>
                </div>
            </div>
        )
    }
}

let SignIn = connect(stateMapper)(SignInComponent);
export default SignIn;
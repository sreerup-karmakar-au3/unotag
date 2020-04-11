import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import {Provider} from "react-redux"

import 'bootstrap/dist/css/bootstrap.min.css'

import App from './components/app'
import SignIn from './components/signin'
import SignUp from './components/signup'
import SignOut from './components/signout'
import { store } from './store/store'

class Manager extends React.Component {
    doRedirect() {
        let isLoggedIn = localStorage.getItem("user");

        if(isLoggedIn) {
            return <Redirect to="/app"></Redirect>
        }
        else {
            return <Redirect to="/signin"></Redirect>
        }
    }
    render() {
        return (
            <Router>
                <Route path="/signin" component={SignIn}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/app" component={App}/>
                <Route path="/signout" component={SignOut}/>
                {this.doRedirect()}
            </Router>
        )
    }
}

ReactDOM.render(<Provider store={store}><Manager/></Provider>, document.getElementById('root'));
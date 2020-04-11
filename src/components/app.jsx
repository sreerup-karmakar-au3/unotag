import React from 'react'

import NavBar from './navbar'
import Fields from './fields'
import Income from './income'
import Expense from './expense'

import './styles/app.css'

class App extends React.Component {
    render() {
        return (
            <div className="main">
                <NavBar/>
                <div className="container">
                    <div className="row">
                        <Fields/>
                    </div>
                    <hr/>
                    <div className="row justify-content-center mt-3">
                        <Income/>
                    </div>
                    <div className="row justify-content-center mt-2">
                        <Expense/>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
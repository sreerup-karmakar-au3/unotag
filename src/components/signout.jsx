import React from 'react'
import { Redirect } from 'react-router-dom'

function SignOut() {
    localStorage.clear();
    return (
        <>
            <Redirect to="/signin"></Redirect>
        </>
    )
}

export default SignOut;
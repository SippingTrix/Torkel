import React from 'react';
import './Login.css'

export default function Login(){
    return (
        <>
        <div className='login-header'>
            <h1>Login</h1>
        </div>
        

        <div className='form'>
            <form id ="login">
                <label>Email: </label>
                <input className="email" type="email"/>
                <br/>
                <label>Password: </label>
                <input className="password" type="password"/>
                <br/>
                <button type="submit" className="login-button">Login</button>
                <br/>
            </form>
        </div>
        <br/>
        <div className="register">Register for an account</div>
        <br/>
        <div className="forgot-password">Forgot Password</div>
    </>
    )
}

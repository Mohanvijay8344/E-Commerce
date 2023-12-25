import React from 'react';
import "./login.css"

function Login() {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Login</h1>
                <div className="loginsignup-fields">
                    <input type="email" placeholder='Enter Your Email'/>
                    <input type="password" placeholder='Enter Your Password'/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    <span><a href='/signup'>forgot password</a></span>
                </p>
            </div>
        </div>
    );
}

export default Login;
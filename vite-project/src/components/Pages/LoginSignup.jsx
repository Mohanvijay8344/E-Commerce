import React from 'react';
import "./LoginSignup.css"

function LoginSignup() {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Signup</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Enter Your Name"/>
                    <input type="email" placeholder='Enter Your Email'/>
                    <input type="password" placeholder='Enter Your Password'/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    Already have an account? <span>Login here.</span>
                </p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id=''/>
                    <p>By Continuing , i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
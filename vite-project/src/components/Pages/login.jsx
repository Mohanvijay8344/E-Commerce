import React from 'react';
import "./login.css"
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { API } from '../../global';

function Login() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (values) => {
            console.log(values);
            const data = await fetch(`${API}/users/login`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
            if (data.status === 401) {
              console.log("error");
              alert("Invalid Cretentials ❌❌");
            } else {
              console.log("success");
              const result = await data.json();
              console.log(result);
              localStorage.setItem("token", result.token);
              navigate("/");
              alert("Login Successfull ✅✅");
              window.location.reload();
            }
          },
    })
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Login</h1>
                <form onSubmit={formik.handleSubmit}>
                <div className="loginsignup-fields">
                    <input type="email" placeholder='Enter Your Email' name='email' value={formik.values.email} onChange={formik.handleChange}/>
                    <input type="password" placeholder='Enter Your Password' name='password' value={formik.values.password} onChange={formik.handleChange}/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">
                    <span><a href='/signup'>Signup</a></span>
        
                </p>
                </form>
            </div>
        </div>
    );
}

export default Login;
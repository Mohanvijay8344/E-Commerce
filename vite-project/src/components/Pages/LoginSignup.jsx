import React from "react";
import "./LoginSignup.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { API } from "../../global";

function LoginSignup() {

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: { name: '', email: '', password: '' },
        onSubmit: async (values) => {
            console.log(values);
            const data = await fetch(`${API}/users/signup`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });

              console.log("success");
              const result = await data.json();
              console.log(result);
              localStorage.setItem("token", result.token);
              
              navigate("/login");
          },
      });

  return (
    <div className="loginsignup">
      <form className="loginsignup-container" onSubmit={formik.handleSubmit}>
        <h1>Signup</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="Enter Your Name" value={formik.values.name} onChange={formik.handleChange} name="name" required/>
          <input type="email" placeholder="Enter Your Email" value={formik.values.email} onChange={formik.handleChange} name="email" required/>
          <input type="password" placeholder="Enter Your Password" value={formik.values.password} onChange={formik.handleChange} name="password" required/>
        </div>
        <div>
          <button type="submit">Continue</button>
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span>
              <a href="/login">Login here</a>
            </span>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By Continuing , i agree to the terms of use & privacy policy.</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginSignup;

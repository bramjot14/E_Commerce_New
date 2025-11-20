import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {

  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email:""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};


  const login = async () => {
    console.log("Login function executed", formData)
    try {
      let response = await fetch("http://localhost:5002/login", { 
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }

      let responseData = await response.json();
      console.log("Response Data:", responseData); // Debugging

      if (responseData.success) {
          localStorage.setItem("auth-token", responseData.token);
          window.location.replace('/');
      } else {
          alert(responseData.errors || "Signup failed. Please try again.");
      }
  } catch (error) {
      console.error("Signup error:", error);
      alert(`Signup failed: ${error.message}`);
  }
    
  }

  const signup = async () => {
    try {
        let response = await fetch("http://localhost:5002/signup", { // ✅ FIXED URL
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let responseData = await response.json();
        console.log("Response Data:", responseData); // Debugging

        if (responseData.success) {
            localStorage.setItem("auth-token", responseData.token);
            window.location.replace('/');
        } else {
            alert(responseData.errors || "Signup failed. Please try again.");
        }
    } catch (error) {
        console.error("Signup error:", error);
        alert(`Signup failed: ${error.message}`);
    }
};


  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-feilds">
          {state === "Sign up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' />: <></>}
          <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
          <input type="password" name='password' value={formData.password} onChange={changeHandler} placeholder='Password' />
          <button onClick={() => {state === "Login" ? login(): signup()}}>Continue</button>

          {state === "Sign up" ? <p className='loginsignup-login'>Already have an account? <span onClick={() => {setState("Login")}}>Login here</span></p>: <p className='loginsignup-login'>Create an account? <span onClick={() => {setState("Sign up")}}>Click here</span></p>}
          
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, I agree to the terms of use & privacy policy. </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup

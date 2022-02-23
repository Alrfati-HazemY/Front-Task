import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './Signup.css'
import { useNavigate } from "react-router-dom";

export const Signup = (props) => {

  if(!localStorage.getItem("count")) {
    localStorage.setItem("count",1)
  }

  const navigate = useNavigate();
  
  const [{id,name,email,password,cPassword},setRegisterForm] = useState(
    {
      id         : "",
      name       : "",
      email      : "",
      password   : "",
      cPassword  : "",
    }
  )

  const [errors , setErrors] = useState({});

  const RegisterValuesHandler = (event) => {
    setRegisterForm(
      (preState) => {
        return {
          ...preState , [event.target.name] : event.target.value
        }
      }
    )
  }

  const RegisterValidation = ({name,email,password}) => {
    let regexEmail = /^[A-z0-9._-]+@(hotmail|gmail|yahoo).com$/;
    let regexName = /^[A-z]{3,}$/;
    let errorForm   = {eName : "" , eEmail : "" , ePassword : "" , eCPassword : "" };
    // let regexPass = /^(?=.*[A-Z])(?=.*[@$!%*#?&])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/;

    if(name.trim().length === 0 || email.trim().length === 0 || password.trim().length === 0  || cPassword.trim().length === 0 )
    {
      alert("Please fill in all inputs");
      return false
    }

    else {
      let status = false
      if(!regexName.test(name)) {
        errorForm.eName = "name is not valid" 
        status = true;
      }

      if(!regexEmail.test(email)) {
        errorForm.eEmail = "email is not valid" 
        status = true;
      }

      if(password !== cPassword) {
        errorForm.eCPassword = "passwords do not match"
        status = true;
      }

      setErrors(
        () => {
          return {...errorForm}
        }
      )
        if(status)
        return false;
  }
  return true;
 }

  const RegisterSubmitHandler = (event) => {
    event.preventDefault();
    let userId = JSON.parse(localStorage.getItem("count"));
    let user = {
      id       : userId,
      name     : name,
      email    : email,
      password : password,
    }
    const status = RegisterValidation(user);
    if(status) {
    if(localStorage.getItem("users")) {
      let users = JSON.parse(localStorage.getItem("users"));
      users.push(user);
      localStorage.setItem("users",JSON.stringify(users));
    }
    else {
      localStorage.setItem("users",JSON.stringify([user]));
    }

    props.setLoggedIn(true);
    localStorage.setItem("count",JSON.stringify(userId+1))
    localStorage.setItem("userLoggedIn",JSON.stringify(user))
    props.setUserLoggedIn(user)
    navigate('/');
    
  }
  }

  return (
    <div className="login-container">
      <form className="login-form" autoComplete="off">
          <h1>SignUp</h1>
        <div className="login-form_box">
          <TextField error = {errors.eName ? true : false} onChange={RegisterValuesHandler} name="name" value={name} className="login-form_input" id="standard-basic" label="Full Name" InputLabelProps={ { style: { color: '#ddd' } } } />
          <div className="error">
            {errors.eName}
          </div>
        </div>
        <div className="login-form_box">
          <TextField error = {errors.eEmail ? true : false} onChange={RegisterValuesHandler} name="email" value={email} className="login-form_input" id="standard-basic" label="Email" InputLabelProps={ { style: { color: '#ddd' } } } />
          <div className="error">
            {errors.eEmail}
          </div>
        </div>
        <div className="login-form_box">
          <TextField onChange={RegisterValuesHandler} name="password" value={password} type="password" className="login-form_input" id="standard-basic" label="Password" InputLabelProps={ { style: { color: '#ddd' } } } style={{color : "white !important"}} />
        </div>
        <div className="login-form_box">
          <TextField error = {errors.eCPassword ? true : false} onChange={RegisterValuesHandler} name="cPassword" value={cPassword} type="password" className="login-form_input" id="standard-basic" label="Confirm Password" InputLabelProps={ { style: { color: '#ddd' } } } style={{color : "white !important"}} />
          <div className="error">
            {errors.eCPassword}
          </div>
        </div>
        <Button onClick={RegisterSubmitHandler} id="login-btn" variant="contained" color="primary">
          Register
        </Button>
      </form>
      </div>
  );
};

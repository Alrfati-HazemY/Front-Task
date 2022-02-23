import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import './Login.css'
import { useNavigate } from "react-router-dom";

export const Login = (props) => {

  const navigate = useNavigate();

  const [users,setUsers] = useState([]);

  const [{email,password},setLoginForm] = useState({
    email    : "",
    password : "",
  }) 

  const [error , setError] = useState("")

  useEffect(
    () => {
      setUsers (
        () => {
          return JSON.parse(localStorage.getItem("users"))
        }
      )
    }
  , [])

  const loginValuesHandler = (event) => {
    setLoginForm(
      (preState) => {
        return{...preState , [event.target.name] : event.target.value}
      }
    )
  } 

  const loginFormHandler = (event) => {
    event.preventDefault();
    if(email.trim().length === 0 || password.trim().length === 0 )
      {
        setError("Please fill in all inputs");
      }
      else if(users) {
        let user = users.filter((ele,index)=>{
          return ele.email === email
        })[0]
        if(user) {
          if(user.password === password) {
          props.setLoggedIn(true);
          localStorage.setItem("userLoggedIn",JSON.stringify(user))
          props.setUserLoggedIn(user)
          navigate("/")
        }
          else {
            setError("Password is not correct");
          }
        }
        else {
          setError("Email is not exist");
        }
      }
        else {
          setError("Email is not exist");
        }
}


  return (
    <div className="login-container">
      <form className="login-form" autoComplete="off">
          <h1>Login</h1>
        <div className="login-form_box">
          <TextField data-testid="email" onChange={loginValuesHandler} value={email} name="email" className="login-form_input" id="standard-basic" label="Email" InputLabelProps={ { style: { color: '#ddd' } } } />
        </div>
        <div className="login-form_box">
          <TextField data-testid="password" onChange={loginValuesHandler} value={password} name="password" type="password" className="login-form_input" id="standard-basic" label="Password" InputLabelProps={ { style: { color: '#ddd' } } } style={{color : "white !important"}} />
          <div className={` ${error ? "login-error-opacity" : ""} error login-error`}>
          {error ? error : "Please fill in all inputs"}
          </div>
        </div>
        <Button onClick={loginFormHandler} id="login-btn" variant="contained" color="primary">
          Login
        </Button>
      </form>
      </div>
  );
};
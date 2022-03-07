import React, { useContext, useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import { useNavigate } from "react-router-dom";
import { LoginCtx } from "../../context/LoginContex";
import {InputCheck} from "../../helper/Validation";


const useStyles = makeStyles((theme) => ({
  container: {
    backgroundImage: 'url("/images/login.jpg")',
    height: "calc(100vh - 65px)",
    backgroundSize: "cover",
    position: "relative",
  },
  form: {
    backgroundColor: "#2b2d42",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 3px 6px rgba(0, 0, 0, 0.23)",
    width: "40%",
    padding: "20px",
    position: "absolute",
    left: "50%",
    top: "40%",
    transform: "translate(-50%, -40%)",
    borderRadius: "5px",
    [theme.breakpoints.down('md')] : {
      width : "60%"
    },
      [theme.breakpoints.down('sm')] : {
      width: "85%"
    }
  },
  title: {
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "32px",
    marginBottom: "15px",
    color: "white",
  },
  loginForm: {
    marginBottom: "20px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    position: "relative",
  },
  login_form_input: {
    width: "90%",
    margin: "auto",
    color: "white",
  },
  error: {
    color: "#ff6a6a",
    fontWeight: "300",
    width: "100%",
    paddingTop: "5px",
    paddingLeft: "1.55em",
    textAlign: "center",
    marginTop: "20px",
    fontSize: "16px",
    opacity: "0",
  },
  loginError: {
    textAlign: "center",
    marginTop: "16px",
    fontSize: "16px !important",
    opacity: 0,
  },
  login_btn: {
    display: "block",
    margin: "auto",
    padding: "10px 25px",
    fontSize: "16px",
  },
  login_error_opacity: {
    opacity: "1",
  },
  multilineColor: {
    color: "white",
  },
}));

export const Login = (props) => {

  const {setUserLoggedIn , setLoggedIn } = useContext(LoginCtx);
  const classes = useStyles();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [{ email, password }, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    setUsers(() => {
      return JSON.parse(localStorage.getItem("users"));
    });
  }, []);

  const loginValuesHandler = (event) => {
    setLoginForm((preState) => {
      return { ...preState, [event.target.name]: event.target.value };
    });
  };

  const loginFormHandler = (event) => {
    event.preventDefault();
    if (InputCheck(email) || InputCheck(password)) {
      setError("Please fill in all inputs");
    } else if (users) {
      let user = users.filter((ele) => {
        return ele.email === email;
      })[0];
      if (user) {
        if (user.password === password) {
          setLoggedIn(true);
          localStorage.setItem("userLoggedIn", JSON.stringify(user));
          setUserLoggedIn(user);
          navigate("/");
        } else {
          setError("Password is not correct");
        }
      } else {
        setError("Email is not exist");
      }
    } else {
      setError("Email is not exist");
    }
  };

  return (
    <Container maxWidth="xl" className={classes.container}>
      <FormControl className={classes.form}>
        <Typography align="center" className={classes.title}>Login</Typography>
        <Box className={classes.loginForm}>
          <TextField
            autoComplete="off"
            data-testid="email"
            onChange={loginValuesHandler}
            value={email}
            name="email"
            className={classes.login_form_input}
            label="Email"
            InputLabelProps={{ style: { color: "#ddd" } }}
            InputProps={{
              className: classes.multilineColor,
            }}
          />
        </Box>
        <Box className={classes.loginForm}>
          <TextField
            autoComplete="off"
            data-testid="password"
            onChange={loginValuesHandler}
            value={password}
            name="password"
            type="password"
            className={classes.login_form_input}
            label="Password"
            InputLabelProps={{ style: { color: "#ddd" } }}
            style={{ color: "white !important" }}
            InputProps={{
              className: classes.multilineColor,
            }}
          />
          <Box
            className={` ${error ? classes.login_error_opacity : ""} ${classes.error} `}
          >
            {error ? error : "Please fill in all inputs"}
          </Box>
        </Box>
        <Button
          onClick={loginFormHandler}
          className={classes.login_btn}
          variant="contained"
          color="primary"
        >
          Login
        </Button>
      </FormControl>
    </Container>
  );
};
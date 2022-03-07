import React, { useContext , useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { LoginCtx } from "../../context/LoginContex";
import {InputCheck} from "../../helper/Validation";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "calc(100vh - 65px)",
    backgroundImage: 'url("/images/login.jpg")',
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
    [theme.breakpoints.down("md")]: {
      width: "60%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
  },
  title: {
    textAlign: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontSize: "32px",
    marginBottom: "15px",
    color: "white",
  },
  loginForm: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    position: "relative",
  },
  login_form_input: {
    width: "90%",
    margin: "auto",
  },
  error: {
    color: "#ff6a6a",
    fontWeight: "300",
    fontSize: "14px",
    width: "100%",
    paddingTop: "5px",
    paddingLeft: "2em",
  },
  login_btn: {
    display: "block",
    margin: "auto",
    padding: "10px 25px",
    fontSize: "16px",
    marginTop: "20px",
  },
  multilineColor: {
    color: "white",
  },
}));

export const Signup = (props) => {

  const {setUserLoggedIn , setLoggedIn } = useContext(LoginCtx);
  const classes = useStyles();
  const navigate = useNavigate();

  const [{ name, email, password, cPassword }, setRegisterForm] = useState({
    id: "",
    name: "",
    email: "",
    password: "",
    cPassword: "",
  });
  
  const [errors, setErrors] = useState({});

  if (!localStorage.getItem("count")) {
    localStorage.setItem("count", 1);
  }

  const RegisterValuesHandler = (event) => {
    setRegisterForm((preState) => {
      return {
        ...preState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const RegisterValidation = ({ name, email, password }) => {
    let regexEmail = /^[A-z0-9._-]+@(hotmail|gmail|yahoo).com$/;
    let regexName = /^[A-z]{3,}$/;
    let errorForm = { eName: "", eEmail: "", ePassword: "", eCPassword: "" };

    if (
      InputCheck(name) ||
      InputCheck(email) ||
      InputCheck(password) ||
      InputCheck(cPassword)
    ) {
      alert("Please fill in all inputs");
      return false;
    } else {
      let status = false;
      if (!regexName.test(name)) {
        errorForm.eName = "Name is not valid";
        status = true;
      }
      if (!regexEmail.test(email)) {
        errorForm.eEmail = "Email is not valid";
        status = true;
      }

      if (password !== cPassword) {
        errorForm.eCPassword = "Passwords do not match";
        status = true;
      }

      setErrors(() => {
        return { ...errorForm };
      });
      if (status) return false;
    }
    return true;
  };

  const RegisterSubmitHandler = (event) => {
    event.preventDefault();
    let userId = JSON.parse(localStorage.getItem("count"));
    let user = {
      id: userId,
      name: name,
      email: email,
      password: password,
    };
    const status = RegisterValidation(user);
    if (status) {
      if (localStorage.getItem("users")) {
        let users = JSON.parse(localStorage.getItem("users"));
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));
      } else {
        localStorage.setItem("users", JSON.stringify([user]));
      }
      setLoggedIn(true);
      localStorage.setItem("count", JSON.stringify(userId + 1));
      localStorage.setItem("userLoggedIn", JSON.stringify(user));
      setUserLoggedIn(user);
      navigate("/");
    }
  };

  ///////  React Component  ///////

  return (
    <Container
      height="calc(100vh - 65px)"
      maxWidth="xl"
      className={classes.container}
    >
      <Box className={classes.form} autoComplete="off">
        <Typography className={classes.title}>SignUp</Typography>
        <Box maxWidth="xl" className={classes.loginForm}>
          <TextField
            InputProps={{
              className: classes.multilineColor,
            }}
            error={errors.eName ? true : false}
            onChange={RegisterValuesHandler}
            name="name"
            value={name}
            className={classes.login_form_input}
            label="Full Name"
            InputLabelProps={{ style: { color: "#ddd" } }}
            autoComplete = "off"
          />
          <Box className={classes.error}>{errors.eName}</Box>
        </Box>
        <Box className={classes.loginForm}>
          <TextField
            error={errors.eEmail ? true : false}
            onChange={RegisterValuesHandler}
            name="email"
            value={email}
            className={classes.login_form_input}
            label="Email"
            InputLabelProps={{ style: { color: "#ddd" } }}
            InputProps={{
              className: classes.multilineColor,
            }}
            autoComplete = "off"
          />
          <Box className={classes.error}>{errors.eEmail}</Box>
        </Box>
        <Box className={classes.loginForm}>
          <TextField
            onChange={RegisterValuesHandler}
            name="password"
            value={password}
            type="password"
            className={classes.login_form_input}
            label="Password"
            InputLabelProps={{ style: { color: "#ddd" } }}
            InputProps={{
              className: classes.multilineColor,
            }}
            autoComplete = "off"
          />
        </Box>
        <Box className={classes.loginForm}>
          <TextField
            error={errors.eCPassword ? true : false}
            onChange={RegisterValuesHandler}
            name="cPassword"
            value={cPassword}
            type="password"
            className={classes.login_form_input}
            label="Confirm Password"
            InputLabelProps={{ style: { color: "#ddd" } }}
            InputProps={{
              className: classes.multilineColor,
            }}
            autoComplete = "off"
          />
          <Box className={classes.error}>{errors.eCPassword}</Box>
        </Box>
        <Button
          onClick={RegisterSubmitHandler}
          className={classes.login_btn}
          variant="contained"
          color="primary"
        >
          Register
        </Button>
      </Box>
    </Container>
  );
};

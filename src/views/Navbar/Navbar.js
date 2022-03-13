import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { LoginCtx } from "../../context/LoginContex";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#2B2D42",
    paddingLeft:"20px",
    paddingRight:"20px"
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  logo : {
    fontFamily: '"Acme", sans-serif',
    color: "white",
    textDecoration: "none",
    transition : "all 0.2s",
    fontSize: "29px",
    "&:hover": {
      color: "#ff8120",
    },
  },
  box: {
    listStyleType: "none",
    gap: "30px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  link: {
    textDecoration: "none",
    color: "white",
    paddingBottom: "5px",
    borderBottom: "2px solid transparent",
    transition: "0.2s all linear",
    textAlign: "center",
    fontSize: "16px",
    "&:hover": {
      borderBottom: "2px solid #ff8120",
      color: "white",
    },
  },
  showLinks : {
    position : "absolute",
    top : "100%",
    left : "-20px",
    width : "calc(100% + 40px)",
    backgroundColor : "#2B2D42",
    display : "flex",
    flexDirection : "column",
    gap : "0",
  },
  linksMobile : {
    borderTop : "1px solid white",
    width : "100%",
    padding : "15px 0",
    "&:hover": {
      borderBottomColor: "transparent",
    },
  },

}));

export const Navbar = (props) => {

  const {loggedIn , setLoggedIn } = useContext(LoginCtx);

  const classes = useStyles();

  const logoutHandler = () => {
    setLoggedIn(false);
    localStorage.removeItem("userLoggedIn");
  };

  const showMenu = () => {
    const links = document.getElementById("links");
    links.classList.toggle(classes.showLinks);
    const navLinks = document.querySelectorAll(`.${classes.link}`);
    navLinks.forEach(element => {
      element.classList.toggle(classes.linksMobile)
    });
  }

  return (
    <AppBar position="relative" className={classes.appBar} >
      <Toolbar>
        <Typography className={classes.title}>
          <Link className={classes.logo} to="/">
            Front-Task
          </Link>
        </Typography>
        <Box id="links" alignItems= "center" display="flex" className={classes.box}>
          <Link className={classes.link} to="/">
            Home
          </Link>
          {loggedIn ? (
            <Link data-testid = "logout" className={classes.link} to="/login" onClick={logoutHandler}>
              Logout
            </Link>
          ) : (
            <>
              <Link className={classes.link} to="/signup">
                SignUp
              </Link>
              <Link className={classes.link} to="/login">
                Login
              </Link>
            </>
          )}
        </Box>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={showMenu}
          data-testid = "icon-btn"
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
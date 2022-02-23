import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

export const Navbar = (props) => {

  const logoutHandler = () => {
    props.setLoggedIn(false);
    localStorage.removeItem("userLoggedIn");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light nav">
      <div className="container-fluid">
        <Link to="/" className="nav-logo">Front-Task</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"> <i className="fa-solid fa-bars"></i></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          <Link to='/'>Home</Link>
          {
            props.loggedIn 
            ?
            <Link to='/login' onClick={logoutHandler}>Logout</Link>
            :
            <>
              <Link to='/signup'>SignUp</Link>
              <Link to='/login'>Login</Link>
            </>
          }

          </div>
        </div>
      </div>
    </nav>
  );
};

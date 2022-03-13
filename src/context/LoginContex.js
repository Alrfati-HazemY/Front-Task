import React, { useEffect , createContext, useState } from "react"

export const LoginCtx = createContext(0);
LoginCtx.displayName = "Login";

const LoginContextProvider = (props) => {

    const [loggedIn,setLoggedIn] = useState(false);

    useEffect(
      () => {
        if(localStorage.getItem("userLoggedIn")) {
          setLoggedIn(true)
        }
      }
    , [])
  
    const [userLoggedIn , setUserLoggedIn] = useState(JSON.parse(localStorage.getItem("userLoggedIn")));
  
    const value = {loggedIn , setLoggedIn , userLoggedIn , setUserLoggedIn }
    

    return(
        <LoginCtx.Provider value={value}>
            {props.children}
        </LoginCtx.Provider>
    );
}

export default LoginContextProvider;
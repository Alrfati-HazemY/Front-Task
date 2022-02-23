import { BrowserRouter, Routes , Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Login } from "./components/Login/Login"
import { Signup } from "./components/Signup/Signup";
import { Welcome } from "./components/Welcome/Welcome";
import { PostsList } from "./components/Posts/PostsList";
import { useEffect, useState } from "react";
import { PostDetails } from "./components/Posts/PostDetails";

function App() {

  const [loggedIn,setLoggedIn] = useState(false);

  useEffect(
    () => {
      if(localStorage.getItem("userLoggedIn")) {
        setLoggedIn(true)
      }
    }
  , [])

  

  // To get user loggedIn information
  const [userLoggedIn , setUserLoggedIn] = useState(JSON.parse(localStorage.getItem("userLoggedIn")));

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path="/" element={ loggedIn ? <PostsList userLoggedIn={userLoggedIn} /> : <Welcome />} />
          <Route path='/login' element={<Login setUserLoggedIn={setUserLoggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path='/signup' element={<Signup setUserLoggedIn={setUserLoggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path='/posts/:id' element={<PostDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

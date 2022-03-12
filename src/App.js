import { BrowserRouter, Routes , Route } from "react-router-dom";
import { Navbar } from "./views/Navbar/Navbar";
import { Login } from "./views/Login/Login"
import { Signup } from "./views/Signup/Signup";
import { Welcome } from "./views/Welcome/Welcome";
import { PostsList } from "./views/Posts/PostsList";
import { useContext} from "react";
import { PostDetails } from "./views/Posts/PostDetails";
import "./App.css";
import { LoginCtx } from "./context/LoginContex";

function App() {

  const {loggedIn} = useContext(LoginCtx);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={ loggedIn ? <PostsList /> : <Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/posts/:id' element={<PostDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

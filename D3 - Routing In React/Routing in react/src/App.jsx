import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Routing in React</h1>

      <nav>
        <Link to={"/login"}>Login</Link> {" | "}
        <Link to={"/"}>Home</Link> {" | "}
        <Link to={"/about"}>About</Link> {" | "}
        <Link to={"/contact"}>Contact</Link>{" | "}
        
      </nav>

      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="*" element={<h1>404 Not Found</h1>}></Route>

      </Routes>

    </>
  )


}

export default App;
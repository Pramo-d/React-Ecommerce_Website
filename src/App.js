import React, { useContext } from "react";
import "./App.css";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Store from "./Pages/Store";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Login from "./Pages/Login";
import AuthContext from "./store/auth-context";
 

function App() {
  const authCtx=useContext(AuthContext);
  return (
    <div className="App">
     <Header/>
      <Routes>
       {!authCtx.isLoggedIn && <Route path="/login" element={<Login/>}/>}
        {authCtx.isLoggedIn && <Route path="/" element={<Home />} />}
      { authCtx.isLoggedIn && <Route path="/about" element={<About />} />}
      {authCtx.isLoggedIn &&  <Route path="/store" element={<Store />} />}
      {authCtx.isLoggedIn && <Route path="/contact" element={<Contact/>}/>}
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import Header from "./Component/Header";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Store from "./Pages/Store";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/store" element={<Store />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;

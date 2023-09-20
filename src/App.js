 import React from 'react'
 import './App.css';
import Header from './Component/Header';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Store from './Pages/Store';
import Home from './Pages/Home';
import Main from './Pages/Main';

 function App() {
   return (
     <div className='App'>
      <Header/>
      <Routes>
        <Route path='/' element={< Main/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/store' element={<Store/>} />
        <Route path='/home' element={<Home/>}/>
      </Routes>
     </div>
   )
 }
 
 export default App
 
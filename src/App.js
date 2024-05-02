import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Endbar from './components/Endbar';

import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About';
import data from './components/data';
// import { Model } from './components/Model';
// import Login from './pages/Login';
import User from './pages/User';
import { useState } from 'react';
function App() {

   const[blogs,setBlogs]=useState(data);
   

  return (
    <div className="">
      <Navbar className="relative"/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blog' element={<Blog  blogs={blogs}/>}/>
        <Route path='/About' element={<About/>}/>
       
        <Route path='/user/:name' element={<User/>}/>
      </Routes>
      
       <Endbar/>
      {/* <Model/> */}
    </div>
  );
}

export default App;

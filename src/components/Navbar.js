import React from 'react'
import { NavLink } from 'react-router-dom';
import { Model } from './Model';
import { useState } from 'react';

 const Navbar = () => {

  const[showModel,setShowModel]= useState(false)


  return (
    <div>
        <div className='bg-black flex justify-between   '>
            <NavLink to="/">
           <div>
            <img src={"https://simplybuy.io/_next/image?url=%2Fsimplybuy-logo.webp&w=384&q=75"}
            alt="" className='w-40 p-4'></img>
           </div>
           
            </NavLink>
            <div className='text-blue-500 flex space-x-3 mt-3 mr-4 font-medium'>
            <NavLink to="/blog">
              <p className=''>
                Blog
              </p>
            </NavLink>
            <NavLink to="/About">
              <p>
                About
              </p>
            </NavLink>
            {/* <NavLink to=""> */}
              <p>
              <button onClick={()=> setShowModel(true)} className='curser-pointer'>
              Login
              </button>
              {/* { showModel && <Model onClose={()=>setShowModel(false)}/>} */}
              { showModel && <Model setShowModel={setShowModel}/>}
               
              </p>
            {/* </NavLink> */}
            </div>

        </div>
    </div>
  )
}

export default Navbar;
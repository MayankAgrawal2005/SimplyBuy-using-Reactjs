
import React from 'react'
import { useParams } from 'react-router-dom';
import { FaRegQuestionCircle } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import { GiCheckeredFlag } from "react-icons/gi";
const User = () => {
    const params =useParams();
    const {name} =params;
  return (

     <div className='w-12/12 h-full mx-auto mr-28 flex flex-col items-center mt-12 space-y-5 bg-[#FFFF] min-h-[100vh]  scroll-smooth'>
      

      
      <div className='uppercase text-2xl font-semibold ml-36'> {name} Picker </div>
       <img src={" "} alt="">

       </img>

       <div className='flex space-x-5 ml-6'>
        <FaRegQuestionCircle className='mt-1 text-[#0CB4E9] text-2xl'/>
         <p className="font-normal text-2xl "> 10 Questions </p>
       </div>

       <div className='flex space-x-5'>
        <div>
        <BsStopwatch  className='text-2xl mr-2  mt-1 text-[#0CB4E9] '/>
        </div>
        <p className='font-normal text-2xl'>  2 Minutes</p>

       </div>
        <div className='flex space-x-5 w-[600px]'>
          <div className=' '>
          <GiCheckeredFlag className=' ml-[222px] text-2xl mr-3 mt-1 text-[#0CB4E9] font-bold'/>
          </div>
          <p className='font-normal text-2xl'>Perfect {name} for you !</p>
        </div>

        
       <div className=' ml-16  bg-[#F08706] p-2 rounded-md'>
       <button className='text-white  font-bold px-2 '>
        Start
       </button>
        
       </div>
       
     </div>
   
  )
}

export default User;

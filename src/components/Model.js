import React, { useState } from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { Register } from './Register';
export const Model = ({setShowModel}) => {



   
  const[isClick,setIsClick]=useState(false)
  const [formData,setFormData]=useState(
    {
      email:"",
      password:""
    }
  )

   function submitHandler(event){
    event.preventDefault();

   }
  function changeHandler(event){
  // console.log(event.target.name);
  // console.log(event.target.value);
   setFormData((prevData)=>({
    ...prevData,
    [event.target.name]:event.target.value
   }))
  }
  return (

    <div className=' '>

   
    <div className='fixed w-[450px] h-[390px] inset-0 border border-black  text-white backdrop-blur     bg-white rounded ml-[550px] mt-[200px]'>
    
    <div className=' '>
    <button onClick={()=> setShowModel(false)} className=' text-2xl ml-[420px] mt-1 text-black'> <IoCloseCircleOutline /> </button>
        
    </div>
        {/* this is form starting div */}
       <div className='flex flex-col items-center mt-2'>

       
      <h1 className='text-black text-2xl'> Login </h1>
       
         <div>
         <button className='w-[400px] flex justify-center
   items-center rounded-[8px] font-medium text-white
   border border-gray-500 px-[50px] py-[8px] gap-x-2 mt-6'>
  <FcGoogle/>
    <p className='text-black'>Sign In  with google</p>
  </button>

   {/* or bala type */}
   <div className='  mt-2 flex w-full   items-center gap-x-2 ' >

<div className='h-[1px] w-full bg-black'></div>
<p className='text-slate-500 font-medium leading[1.375rem]'>Or </p>
<div className='h-[1px] w-full bg-black'></div>
</div>

<form  onSubmit={submitHandler} className='flex flex-col mx-auto space-y-2'>
  <label>
    <input
    className=' rounded-[0.5rem] text-black w-[400px] p-[12px] border  border-gray-500 '
    type='text'
    value={formData.email}
     required
     placeholder='Email'
     onChange={changeHandler}
    />
  </label>

   <label>
    <input
      className=' rounded-[0.5rem] text-black w-[400px] p-[12px] border  border-gray-500 '
      type="password"
      required
      onChange={changeHandler}
      value={formData.password}
      placeholder='Password'
    />
   </label>
   <div className='bg-orange-500 mt-2 mx-auto flex flex-col w-[75px] rounded '>
   <button className='p-2  '>
      Login
    </button>
    
   </div>


</form>


   <div className='flex flex-col items-center  '>

 
   
    <div>

   
       <span className='text-black'> Not a member yet? </span>
       <button onClick={()=>setIsClick(true)} className=" text-purple-800 underline"> Register now </button>

       {isClick && <Register setIsClick={setIsClick} setShowModel={setShowModel} />}

        
       </div>
   </div>
    
          


         </div>
       
       </div>
    </div>
    </div>
  )
}

import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

export const Register = ({setIsClick,setShowModel}) => {
  return (
    <div className='fixed   w-[450px] h-[490px] inset-0 border border-black   text-black backdrop-blur-sm    bg-white rounded  '>
    
                <div className=' '>
    <button onClick={()=> setIsClick(false)} className=' text-2xl ml-[420px] mt-1 text-black'> <IoCloseCircleOutline /> </button>
        
    </div>
     <div className=''>
        <h1 className='text-2xl text-center'>
            Register 
        </h1>

        <p className='ml-5 mt-3'>
            Create your account . Its free and all your <br/>  SimplyBuy results will be accessible in one place
        </p>

        <button className='w-[400px] flex justify-center ml-5
   items-center rounded-[8px] font-medium text-white
   border border-gray-500 px-[50px] py-[8px] gap-x-2 mt-6'>
  <FcGoogle/>
    <p className='text-black'>Sign In  with google</p>
  </button>


  <div className='  mt-2 flex w-full   items-center gap-x-2 ' >

<div className='h-[1px] w-full bg-black'></div>
<p className='text-slate-500 font-medium leading[1.375rem]'>Or </p>
<div className='h-[1px] w-full bg-black'></div>
</div>

<form className='flex flex-col mx-auto space-y-2 ml-5'>
<label>
    <input
    className=' rounded-[0.5rem] text-black w-[400px] p-[12px] border  border-gray-500 '
    type='text'
    // value={formData.email}
     required
     placeholder='Email'
    //  onChange={changeHandler}
    />
  </label>

  <label>
  <input
    className=' rounded-[0.5rem] text-black w-[400px] p-[12px] border  border-gray-500 '
    type='password'
    // value={formData.email}
     required
     placeholder='Password'
    //  onChange={changeHandler}
    />
  </label>
  <label>
  <input
    className=' rounded-[0.5rem] text-black w-[400px] p-[12px] border  border-gray-500 '
    type='password'
    // value={formData.email}
     required
     placeholder=' Confirm Password'
    //  onChange={changeHandler}
    />
  </label>
  <div className='bg-orange-500 mt-2 mx-auto flex flex-col w-[75px] rounded '>
   <button className='p-2 text-white  '>
      Register
    </button>
    
   </div>
   
</form>

  <div className='flex justify-center mt-2 space-x-2'>
   <p> Already a member ? </p>
    <button onClick={()=> setShowModel(true)} className='text-blue-500 underline '> Login </button>
    
  </div>


     </div>

    </div>
  )
}

import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
export const ContentModel = ({setShowModel}) => {
  return (
    <div className=' fixed border border-black ml-[550px] bg-white inset-0 w-[400px]  mt-[150px] h-[450px] backdrop-blur rounded  '>
    <div className=' text-end '>
    <button onClick={()=> setShowModel(false)} className=' text-2xl  mt-1 text-black'> <IoCloseCircleOutline /> </button>
        
    </div>
    <div className='text-center '>
      <p className='text-2xl '>Contact us</p> 

    </div>
     
      <div className='flex flex-col text-center mt-3 '>
        <form >
            <label className=' '>
                <input
                className='w-[350px] rounded  border border-black p-2'
                 type='email'
                 required
                 placeholder='Email'
                />
            </label>

            <label className=' '>
                <input
                className='w-[350px] mt-2 rounded  border border-black p-2'
                 type='text'
                 required
                 placeholder='Subject'
                />
            </label>

            <label className=' '>
                <textarea

                className='w-[350px] h-[150px] mt-2 rounded  border border-black p-2'
                 type='textarea'
                 required
                 placeholder='Type message here'
                />
                
            </label>

              <div className='mt-2 bg-[#f08706] p-2 w-[100px] mx-auto rounded-md '>
                <button className='text-white'>
                  Submit
                </button>
              </div>
        </form>
      </div>
    </div>
  )
}

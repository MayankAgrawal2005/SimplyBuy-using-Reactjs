import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";
export const ReportBug = ({setReportModel}) => {
  return (
    <div className=' fixed border border-black  bg-white inset-0 w-[400px] ml-[550px] mt-[150px] h-[450px] backdrop-blur rounded  '>
<div className=' text-end '>
    <button onClick={()=> setReportModel(false)} className=' text-2xl  mt-1 text-black'> <IoCloseCircleOutline /> </button>
        
    </div>
    <div className='text-center font-bold text-2xl'>
        Report Bug
    </div>
  
    <div className='flex flex-col text-center mt-3 '>
        <form >
            
             <label>
            
               
                 <select   className='w-[350px] rounded  border border-black p-2' >
  <option value="select a category">Select a category...</option>
  <option value="results">Results</option>
  <option value="questions">Questions</option>
  <option value="saved results">Saved Results</option>
  <option value="login/register">Login/Register</option>
  <option value="other">Other</option>
</select>
              
             </label>
           

            <label className=' '>
                <textarea

                className='w-[350px] h-[150px] mt-2 rounded  border border-black p-2'
                 type='textarea'
                 required
                 placeholder='Describe bug  here'
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

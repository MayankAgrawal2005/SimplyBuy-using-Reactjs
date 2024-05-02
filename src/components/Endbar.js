import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { ContentModel } from './ContentModel';
import { ReportBug } from './ReportBug';
 const Endbar = () => {

   const[showModel,setShowModel]=useState(false)
   const[reportModel,setReportModel] = useState(false)


  return (
    <div>
        <div className='bg-black flex justify-evenly p-3   bottom '>
            <NavLink to="/About">
                <p className='text-white hover:text-[#0CB4E9] '>About</p>
            </NavLink>
               {}
            <NavLink>
                <p  onClick={()=>setShowModel(true)}  className='text-white hover:text-[#0CB4E9]'> Contact us</p>
            </NavLink>

            
            <NavLink>
                <p  onClick={()=> setReportModel(true)} className='text-white hover:text-[#0CB4E9]'> Report Bug</p>
            </NavLink>
            {showModel && <ContentModel setShowModel={setShowModel}/>}
            {reportModel && <ReportBug setReportModel={setReportModel}/>}
        </div>
    </div>
  )
}

export default Endbar;
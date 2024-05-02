import React from 'react'

export const Card = ({id,image,description,date}) => {
  return (
    <div className=''>
<div className=" bg-[#363B47] mt-2 w-[1/4px] h-[300px] hover:scale-105 transition duration-300  
 rounded-xl ease-in outline  border border-[#363B47]  ">
  <img src={image} className=''></img> 

   
   <p className='text-white max-w-[285px] font-bold m-2 '>{description}</p> 
  <p className='text-[#0CB4E9] mt-1 p-2 '> {date}</p>
   </div>
  
        
    </div>
  )
}

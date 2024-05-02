import React from 'react'
import { Card } from '../components/Card'
 const Blog = ({blogs}) => {
  return (
    <div className='min-h-[100vh] w-12/12 bg-[#20232A] scroll-smooth'>
    <div className="flex items-center justify-center ">
      <h1 className='text-[#0CB4E9] font-semibold text-3xl mt-5'>SimplyBuy Blog</h1>
    </div>
    
     <div className="  grid grid-cols-4 mx-auto  mt-2 min-h-[40vh] max-w-6xl space-y-3 space-x-3 p-2 ">
       {
       blogs.map((blog)=>{
         return <Card  key={blog.id} {...blog} />
       })
       }
     </div>

    
    </div>
  )
}

export default Blog;
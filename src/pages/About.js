import React from 'react'
import { NavLink } from 'react-router-dom';
 const About = () => {
  return (
    <div className='min-h-[100vh] w-12/12 bg-[#20232A] scroll-smooth' >

    <div className='text-center   text-[#06BEF0] text-2xl py-12'>
      About 
    </div>
    <div className='max-w-[675px] mx-auto text-white  font-normal space-y-1 mt-4 '>
    Information is everywhere on the internet. This is a great thing; until it isn’t.
     We have all gotten onto our computer to buy a product, having no idea where to start. We then end up spending hours watching videos and reading reviews only to realize we have made no progress in narrowing down our search. When it comes to picking products these days,
     the problem is no longer a lack of information, it’s sifting through the information overload.
     <br/>
     <br/>
     That is where SimplyBuy comes in. Our product pickers, crafted and endorsed by industry experts,
      suggest the best products for your unique needs. Our goal is to direct you to the same product you would eventually buy after hours of reseach, in as little as two minutes.
      Let SimplyBuy do the hard work for you and bring back the joy of online shopping.
      <br/>
      <br/>
      As an Amazon Associate and affiliate for companies such as evo,
       and JensonUSA we may earn a small commission when you make a purchase through links on our recommended products at no additional cost to you.

       <br/>
       <br/>
       <span className='ml-[60px] font-semibold  text-[#06BEF0]'>
       See the SimplyBuy process for yourself. Select a product to get started:
       </span>
    </div>
       
       <div className='text-center mt-4 mx-auto flex flex-col items-center justify-center'>
        <p className='text-[#F07A1D] '>Outdoor/Sports Gear</p>
        <div className='space-x-2 max-w-[675px]  text-xs mt-2 font-bold font-serif'>
          
          <NavLink to='/user/Mountain Bikes'>
          <button className='bg-white text-black px-5 py-3 mb-2 rounded w-44 hover:bg-[#0CB4E9] hover:text-white hover:scale-110
           hover:font-bold hover:shadow transition duration-300'>Mountain Bikes</button>
          </NavLink>
          
          <button className='bg-white text-black px-5 py-3 mb-2 rounded w-44  hover:bg-[#0CB4E9] hover:text-white hover:scale-110 hover:font-bold hover:shadow transition duration-300'>Skis</button>
          <button className='bg-white text-black px-5 py-3 mb-2 rounded w-44  hover:bg-[#0CB4E9] hover:text-white hover:scale-110 hover:font-bold hover:shadow transition duration-300'>Snowboards</button>
          <button className='bg-white text-black px-5 py-3 mb-2 rounded w-44  hover:bg-[#0CB4E9] hover:text-white hover:scale-110 hover:font-bold hover:shadow transition duration-300'>Snowboard Bindings</button>
          <button className='bg-white text-black px-5 py-3 mb-2 rounded w-44  hover:bg-[#0CB4E9] hover:text-white hover:scale-110 hover:font-bold hover:shadow transition duration-300'>Snowboard Boots</button>
          <button className='bg-white text-black px-5 py-3 mb-2 rounded w-44  hover:bg-[#0CB4E9] hover:text-white hover:scale-110 hover:font-bold hover:shadow transition duration-300'> Barbells</button>
        </div>
       </div>

       <div  className='mt-3 flex flex-col items-center justify-center'>
        <p className='text-[#F07A1D]'>Tech</p>
        <div className='space-x-2 text-xs mt-2 font-bold font-serif'>
        <button className='bg-white text-black  font-semiboldbold  px-5 py-3 mb-2 rounded w-44 hover:bg-[#0CB4E9] hover:text-white hover:scale-110
            hover:shadow transition duration-300'>Headphones</button>
           <button className='bg-white text-black px-5 py-3 mb-2 rounded w-44 hover:bg-[#0CB4E9] hover:text-white hover:scale-110
           hover:font-bold hover:shadow transition duration-300'>Monitors</button>
           <button className='bg-white text-black px-5 py-3 mb-2 rounded w-44 hover:bg-[#0CB4E9] hover:text-white hover:scale-110
           hover:font-bold hover:shadow transition duration-300'>TVs</button>
        </div>
       </div>
    </div>
  )
}

export default About;
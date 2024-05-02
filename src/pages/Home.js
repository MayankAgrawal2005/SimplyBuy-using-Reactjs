import React from 'react';
import { FaRegQuestionCircle } from "react-icons/fa";
import { ImFilter } from "react-icons/im";
import { GiCheckeredFlag } from "react-icons/gi";
import routedata from '../components/routedata';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

 const Home = () => {

  // const[category,setCategory]=useState(null);

  // const handleButtonClick = (categorName)=>{
  //      setCategory(categorName);
  // };

  // const [category, setCategory] = useState([]);

  // const handleButtonClick = (categoryData) => {
  //   // Compare the passed categoryData with your predefined data
  //   const matchedCategory = Object.values(routedata).find(
  //     (data) => JSON.stringify(data) === JSON.stringify(categoryData)
  //   );
  //   setCategory(matchedCategory);
  // };


  return (
    <div className='w-12/12 h-full  bg-[#20232A] min-h-[100vh]  scroll-smooth '>
    {/* for image */}
      
      <div className='flex flex-col items-center   justify-center text-center'>
      <div className=' p-8   '>
       <img src={"  https://simplybuy.io/_next/image?url=%2Fsimplybuy-logo.webp&w=384&q=75"} 
       alt='' className='w-[300px] ml-[50px]' /> 
        <h2 className='text-white font-bold text-2xl mt-5'> Product Pickers</h2>
        <p className='text-white text-md mt-1'> Get Personal recommendations for products in just minutes! </p>
        <p className='text-[#0CB4E9] mt-8'> Select A Product</p>
      </div>
      {/* onClick={()=> handleButtonClick(routedata.mountain)} */}
       <div>
        <p className='text-[#F07A1D]'>Outdoor/Sports Gear</p>
        <div className='space-x-2 text-xs mt-2 font-bold font-serif'>
          <NavLink to='/user/mountainbike'>
          <button    className='bg-white text-black px-5 py-3 mb-2 rounded w-44 hover:bg-[#0CB4E9] hover:text-white hover:scale-110
           hover:font-bold hover:shadow transition duration-300'>Mountain Bikes</button>
          </NavLink>
          
           <NavLink to='/user/skis'>
           <button className='bg-white text-black px-5 py-3 mb-2 rounded w-44  hover:bg-[#0CB4E9] hover:text-white hover:scale-110 hover:font-bold hover:shadow transition duration-300'>Skis</button>
           </NavLink>
          
           <NavLink to='/user/snowboards'>
           <button className='bg-white text-black px-5 py-3 mb-2 rounded w-44  hover:bg-[#0CB4E9] hover:text-white hover:scale-110 hover:font-bold hover:shadow transition duration-300'>Snowboards</button>
           </NavLink>
           
           <NavLink to='/user/snowboards binding'>
           <button className='bg-white text-black px-5 py-3 mb-2 rounded w-44  hover:bg-[#0CB4E9] hover:text-white hover:scale-110 hover:font-bold hover:shadow transition duration-300'>Snowboard Bindings</button>
           </NavLink>
          
           <NavLink to='/user/snowboards boots'>
           <button className='bg-white text-black px-5 py-3 mb-2 rounded w-44  hover:bg-[#0CB4E9] hover:text-white hover:scale-110 hover:font-bold hover:shadow transition duration-300'>Snowboard Boots</button>
           </NavLink>
          
           <NavLink to='/user/Barbells'>
           <button className='bg-white text-black px-5 py-3 mb-2 rounded w-44  hover:bg-[#0CB4E9] hover:text-white hover:scale-110 hover:font-bold hover:shadow transition duration-300'> Barbells</button>
           </NavLink>
         

          {/* {category && <CategoryPage category={category} />} */}
        </div>
       </div>

       <div  className='mt-3'>
        <p className='text-[#F07A1D]'>Tech</p>
        <div className='space-x-2 text-xs mt-2 font-bold font-serif'>

          <NavLink to='/user/Headphones'>
          <button className='bg-white text-black  font-semiboldbold  px-5 py-3 mb-2 rounded w-44 hover:bg-[#0CB4E9] hover:text-white hover:scale-110
            hover:shadow transition duration-300'>Headphones</button>
          </NavLink>
          
          <NavLink to='/user/Monitors'>
          <button className='bg-white text-black px-5 py-3 mb-2 rounded w-44 hover:bg-[#0CB4E9] hover:text-white hover:scale-110
           hover:font-bold hover:shadow transition duration-300'>Monitors</button>
          </NavLink>
            
            <NavLink to='/user/TVs'>
            <button className='bg-white text-black px-5 py-3 mb-2 rounded w-44 hover:bg-[#0CB4E9] hover:text-white hover:scale-110
           hover:font-bold hover:shadow transition duration-300'>TVs</button>
            </NavLink>
           
        </div>
       </div>

      
        
      
      </div>
      {/* second part */}
      <div >
        <div className='flex flex-col items-center justify-center mt-28'>
           <div>
            <h1 className='text-white font-bold font-serif text-3xl '> How does Simplybuy Work ?</h1>
           </div>
           {/* bad ka part */}
           <div className='flex space-x-6 mt-4 '>
           
           <div className='mt-2 '>
            <FaRegQuestionCircle  className='text-[#0CB4E9] text-4xl '/>
            </div>
            <div>
           
           
              <div>
               <h1 className='text-[#0CB4E9] text-xl'>Learn</h1>
               <p className='max-w-[500px] text-white'>Answer questions to let us know your desired specs. 
               We don't expect everyone to be experts. You will be provided with all the necessary info to answer any technical questions.</p>
              </div>
            </div>
            
           </div>

           {/* filter wala part */}
           <div className='flex space-x-6 mt-4 '>
           
           <div className='mt-2 '>
            <ImFilter  className='text-[#0CB4E9] text-4xl '/>
            </div>
            <div>
           
           
              <div>
               <h1 className='text-[#0CB4E9] text-xl'>Filter</h1>
               <p className='max-w-[500px] text-white'>We filter down your results to only products that fit your needs. When possible we give a range of products. 
               We let you choose between value picks and high-end picks based on your selected filters.</p>
              </div>
            </div>
            
           </div>
           {/* buy wala part */}
           <div className='flex space-x-6 mt-4 mb-20 '>
           
           <div className='mt-2 '>
            <GiCheckeredFlag  className='text-[#0CB4E9] text-4xl '/>
            </div>
            <div>
           
           
              <div>
               <h1 className='text-[#0CB4E9] text-xl'>Buy</h1>
               <p className='max-w-[500px] text-white'>Our process is the quickest and most efficient way to find the perfect products for you.
                Especially for those that are new to the category.</p>
              </div>
            </div>
            
           </div>
        </div>
      </div>

      <div>

      </div>



    </div>
  )
}
export default Home;
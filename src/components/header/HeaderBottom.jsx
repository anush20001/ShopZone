import React, { useEffect, useRef, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideNavContent from './SideNavContent';
import {motion} from "framer-motion"
import { useSelector } from 'react-redux';



const HeaderBottom = () => {
 
    const[sidebar, setSideBar] = useState(false);
    const ref = useRef()
    const userInfo = useSelector((state) => state.amazonReducer.userInfo);
 
    useEffect(() => {
        document.body.addEventListener("click", (e)=> {
           if(e.target.contains(ref.current)){
            setSideBar(false)
           }
        })
    },[ref,sidebar])





  return (
    <div  className=' w-full px-4 h-[36px]  bg-amazon_blue text-white flex items-center  '>
    
    {/* list item */}

 <ul className='flex items-center gap-2 text-sm font-semi-bold tracking-wide  sm:text-[12px] sm:gap-0 sm:justify-between'>
   
     
    <li onClick={()=> setSideBar(true)} className=' headerHover gap-1 font-bold '>
        All
        </li>
    <li className=' headerHover  hidden md:inline-flex'>Today's Deals</li>
    <li className='  headerHover hidden md:inline-flex'>Gift Cards</li>
    <li className=' headerHover  hidden md:inline-flex'>Best Seller</li>
    <li className=' headerHover  hidden md:inline-flex'>Sell</li>
    <li className=' headerHover  hidden md:inline-flex'>Electronics</li>
    <li className=' headerHover  hidden md:inline-flex'>Fashion</li>
    <li className='headerHover  hidden md:inline-flex'>Customer Services</li>
 </ul>
    {/* sideNavbar */}
       {
       sidebar && (
      <div  className="w-full h-screen text-black fixed top-0 left-0 bg-amazon_blue bg-opacity-50 " >

   
   <div className="w-full h-full relative ">
            <motion.div
                ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-[270px] md:w-[350px] h-full bg-white border border-black "
            >
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4">
                {
                    userInfo ? (
                        <img  
                        className=' w-10 h-10 rounded-full'
                        src={userInfo.image} alt="userImg" />
                    )
                    :
                    (
                        <AccountCircleIcon />
                    )
                }
                
                 
               {
                userInfo ? (
                    <h3 className="font-titleFont font-bold text-lg tracking-wide">
                 {userInfo.userName}
                  </h3> )
                  :
                  (
                    <h3 className="font-titleFont font-bold text-lg tracking-wide">
                    Hello, Sign In
                  </h3>)
               }
              </div>
            
              {/* ============================ Content & Devices Start here ================ */}
              <SideNavContent
                title="Digital Content & Devices"
                one="ShopZone Music"
                two="Kindle E-readers & Books"
                three="ShopZone Appstore"
              />
              <SideNavContent
                title="Shop By Department"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="ShopZone live"
                three="International Shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Service"
                three="Contact us"
              />
              {/* ============================ Content & Devices End here ================ */}
              <span
                onClick={() => setSideBar(false)}
                className="cursor-pointer absolute top-0 left-[270px] md:left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
              >
                <CloseIcon />
              </span>
            </motion.div>
          </div>


              </div>
       

      
       ) }





    </div>
  )
}

export default HeaderBottom
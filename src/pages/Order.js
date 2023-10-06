import React from 'react'
import thankyouImg from "../assests/thankuImg.webp"
import FooterMiddle from '../components/footer/FooterMiddle'
import FooterBottom from '../components/footer/FooterBottom'
import LOGORDER from "../assests/LOGOORDER.png"
import { Link } from 'react-router-dom'
const Order = () => {
  return (
    <div  className=' w-full  items-center flex flex-col justify-center    mx-auto h-full bg-orange-200 '>
       <Link to='/'>
       <img src={LOGORDER} alt="LOGOORDER"  className=' w-24  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] rounded-lg h-14 m-3'/>
       </Link>
          <div  className=' w-[350px] mx-auto flex flex-col justify-between rounded-lg mt-20 items-center bg-orange-100  mb-10 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]'>
  
  <img src={thankyouImg} alt="" className=' bg-zinc-200 rounded-lg' />
  <h2 className=' font-bold text-lg'>Thank you for Buying our product</h2>

  <p className=' text-sm  mt-7 font-semibold mb-5'>Your Ordered will be deliverd within five days</p>

   </div>
   <FooterMiddle />
        <FooterBottom />
    </div>
  )
}

export default Order
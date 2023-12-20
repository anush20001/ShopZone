import React, { useEffect } from 'react';
import axios from 'axios';
import { useLoaderData } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { addToCart } from '../../redux/amazonSlice';
import { useState } from 'react';
const Products = () => {
  const data = useLoaderData()
  const productData = data.data;
  const dispatch = useDispatch();

 


  // max-w-screen-2xl
  return (
    <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-6 px-4  ">
      {

        productData.map((item) => (
          <div key={item.id}
            className="bg-white h-auto border-[1px] font-bold hover:border-gray-300 py-5 z-30 hover:border-transparent hover:scale-105
         shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-6 ">
           <span className='text-xs capitalize italic  absolute top-2 right-2 text-gray-500 '>{item.category}</span>
            <div className="w-full h-auto flex items-center justify-center relative group">
              <img
                className='w-52 h-64 object-contain  '
                src={item.image}
                alt="ProductImage" />

<ul className="absolute w-full h-36 bg-gray-100 -bottom-[160px] group-hover:bottom-0 duration-700 flex flex-col justify-center items-end gap-2">
              <li className="productLi">
                Compare
                <span>
                  <ApiIcon />
                </span>
              </li>
              <li onClick={() =>dispatch(addToCart({
               id: item.id,
               title: item.title,
               description: item.description,
               price: item.price,
               category: item.category,
               image: item.image,
               quantity: 1,
              }))} className="productLi">
                Add to Cart
                <span>
                  <ShoppingCartIcon />
                </span>
              </li>
              <li className="productLi">
                View Details{" "}
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Wish List{" "}
                <span>
                  <FavoriteIcon />
                </span>
              </li>
            </ul>
               
            </div>

            <div className='px-4 z-10 bg-white'>
              <div className=" flex items-center justify-between  ">
                <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-bold "
     
          >{item.title.substring(0, 20)}
                 
                
                </h2>
             
              </div>

              <div className=' text-sm  mt-4 '>
                <p>   {item.description.substring(0, 80)}</p>
                <div className=' text-yellow-400 mb-3 '>
                  <StarIcon />
                  <StarIcon  />
                  <StarIcon/>
                  <StarIcon/>
                  <StarIcon/>
                  </div>
                <p className="text-sm text-gray-600 font-semibold flex ml-4">₹{item.price}</p>
                
              </div>
              <button onClick={() =>dispatch(addToCart({
               id: item.id,
               title: item.title,
               description: item.description,
               price: item.price,
               category: item.category,
               image: item.image,
                quantity: 1,
              }))} className="w-full py-1.5 rounded-md mt-3 font-medium font-titleFont  text-base bg-gradient-to-tr from-red-500 to-red-600 border border-yellow-500 hover:border-yellow-700 hover:from-yellow-100 to hover:to-yellow-400  duration-400"
           
              >Add to Cart</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Products
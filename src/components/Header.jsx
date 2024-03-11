import React from 'react';

import { FaUser, FaSearch, FaHeart } from "react-icons/fa";
import { IoCartSharp } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const categories=
    [
        "smartphones",
        "laptops",
        "fragrances",
        "skincare",
        "groceries",
        "home-decoration",
        "furniture",
        
    ]


const Header = () => {
    const length=useSelector(state=>state.cart.list.length)
    return <>

<div className="flex justify-end gap-8 text-white p-1 bg-lime-400 w-full h-9 pr-10">
        <div className="flex justify-center items-center gap-2">
          <FaHeart />
          <div>Wish List</div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaUser />
          <Link to='/login'>
          <div>Log in</div>
</Link>
        </div>
      </div>
      <div className="bg-red-500 w-full h-16 flex gap-2 justify-around items-center">
        <Link to="/">
        <img className="w-44" src="https://trymemall.com/images/trymemall1.png"></img>
        </Link>
        <div className="flex justify-center border border-lime-600 rounded-full w-[600px] h-[48px] bg-slate-100  ">
          <div className="flex w-[85%] gap-1">
            <select className="w-[33%] border border-slate-300 rounded-l-full bg-white m-1" name="Categories ">
            <option value="Categories">Categories</option>
              {categories.map((item)=>(<option  value={item}>{item}</option>))}
              
            </select>
            <select className="w-[33%] bg-white border border-slate-300 mr-1 my-1">
              <option>Brand</option>
            </select>
            <input className="w-[33%] bg-white outline-none" placeholder="Search" />

          </div>
          <button className="bg-lime-400 rounded-r-full w-[15%] flex justify-center items-center text-gray-100"><FaSearch /></button>
        </div>
        <div>
        <Link to='/cart'>
          <div className="w-48 flex justify-center items-center bg-slate-50 rounded-full h-[40px]">
            <div className="w-[25%] bg-lime-400 flex justify-center items-center text-white text-lg rounded-l-full h-full">
              < IoCartSharp /></div>
            <div className="w-[75%] text-center font-semibold text-sm ">Shopping Cart({length})</div>
          </div>
          </Link>

        </div>

      </div>
    </>;
}


export default Header;
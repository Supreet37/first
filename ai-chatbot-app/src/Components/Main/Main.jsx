import React from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GiDiamonds } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import { SiRoamresearch } from "react-icons/si";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { BsFillMicFill } from "react-icons/bs";
import image from "../../assets/logo.jpg"

const Main = () => {
  return (
    <div className="w-full h-screen bg-white flex flex-col justify-between px-5 py-3">
      
      <div className="flex justify-between items-start ">
        <div className="flex flex-col gap-1 ">
          <h1 className="text-2xl font-[400]">Gemini</h1>
          <button className="text-sm bg-[#ECEFF1] font-semibold px-2 py-1 rounded-full flex items-center hover:bg-gray-300 cursor-pointer">
            2.5 Flash <MdOutlineArrowDropDown className="text-xl" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm bg-[#ECEFF1] px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-300 cursor-pointer">
            <GiDiamonds className="text-amber-400 text-xl" />
            Upgrade
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer">
            <img src={image} alt="profile" className='w-[100%] h-[100%]'/>
          </div>
        </div>
      </div>

      <div className="flex  justify-center items-center">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Hello, World
        </h2>
      </div>

      <div className='w-[800px] mx-auto border border-gray-300 rounded-2xl px-6 py-4 flex flex-col gap-5 shadow-sm text-gray-500 mb-[50px]'>
        <div>
          <input type="text" placeholder='Ask Gemini' className=' rounded w-full py-2 px-0  focus:outline-none text-xl'/>
        </div>
        <div className='flex items-center gap-4 justify-between font-[500]'>
          <div className='flex items-center gap-6 '>
          <input type="file" id="file-upload" className='hidden'/>
             <label htmlFor="file-upload">
               <GoPlus className="text-2xl cursor-pointer" />
             </label>
          <span className='flex items-center gap-2   cursor-pointer'><SiRoamresearch />Deep Research</span>
          <span className='flex items-center gap-2   cursor-pointer'><MdOutlineLibraryAdd />Canvas</span>
          </div>
          <BsFillMicFill className=' cursor-pointer'/>
        </div>
      </div>
    </div>
  );
};

export default Main;

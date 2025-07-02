import React, { useRef } from 'react';
import { FaBars } from "react-icons/fa6";
import { HiSearch } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegGem } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdSettings } from "react-icons/md";

const Sidebar = () => {
  const fullRef = useRef();
  const miniRef = useRef();

  const toggleSidebar = () => {
    const sidebar = miniRef.current.style.display === "flex";

    fullRef.current.style.display = sidebar ? "flex" : "none";
    miniRef.current.style.display = sidebar ? "none" : "flex";
  };

  return (
    <div className='flex'>

      
      <div ref={fullRef} className="h-screen w-[300px] bg-[#E2E7EB] flex flex-col p-7 relative transition-all duration-300">
        <div className="flex justify-between items-center mb-8">
          <div className="p-2 hover:bg-gray-300 rounded-full cursor-pointer" onClick={toggleSidebar}>
            <FaBars className="text-xl" />
          </div>
          <div className="p-2 hover:bg-gray-300 rounded-full cursor-pointer">
            <HiSearch className="text-xl" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 p-2 hover:bg-gray-300 rounded-full cursor-pointer">
            <BsPencilSquare className="text-xl" />
            <span className="text-sm text-gray-700">New chat</span>
          </div>
          <div className="flex items-center gap-4 p-2 hover:bg-gray-300 rounded-full cursor-pointer">
            <FaRegGem className="text-xl" />
            <span className="text-sm text-gray-700">Explore Gems</span>
          </div>
          <div className="flex items-center gap-4 p-2 hover:bg-gray-300 rounded-full cursor-pointer">
            <IoMdInformationCircleOutline className="text-xl" />
            <span className="text-sm text-gray-700">Info & Activity</span>
          </div>
        </div>

        <div className="absolute bottom-10 flex items-center gap-4 p-2 pr-20 hover:bg-gray-300 rounded-full cursor-pointer">
          <MdSettings className="text-xl" />
          <span className="text-sm text-gray-700">Settings and help</span>
        </div>
      </div>

      
      <div ref={miniRef} className="h-screen w-[80px] bg-[#E2E7EB] flex-col items-center p-4 relative hidden transition-all duration-300">
        <div className="flex justify-between items-center mb-8">
          <div className="p-2 hover:bg-gray-300 rounded-full cursor-pointer" onClick={toggleSidebar}>
            <FaBars className="text-xl" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="p-2 hover:bg-gray-300 rounded-full cursor-pointer flex justify-center">
            <BsPencilSquare className="text-xl" />
          </div>
          <div className="p-2 hover:bg-gray-300 rounded-full cursor-pointer flex justify-center">
            <FaRegGem className="text-xl" />
          </div>
          <div className="p-2 hover:bg-gray-300 rounded-full cursor-pointer flex justify-center">
            <IoMdInformationCircleOutline className="text-xl" />
          </div>
        </div>

        <div className="absolute bottom-10 p-2 hover:bg-gray-300 rounded-full cursor-pointer flex justify-center ">
          <MdSettings className="text-xl" />
        </div>
      </div>

    </div>
  );
};

export default Sidebar;

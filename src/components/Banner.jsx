import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { HiOutlineHome } from 'react-icons/hi';
import { MdOutlineVilla } from 'react-icons/md';
import { PiBuildingOffice } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export default function Banner() {
  return (
    <div className="w-full flex flex-col justify-center items-center z-10 h-[50vh] md:h-screen px-4">
      <div
        className="text-center text-white text-2xl md:text-6xl md:px-20"
        data-aos="fade-down"
        data-aos-duration="1200"
        data-aos-once
      >
        Give your home that finishing touch
      </div>
      {/* <h1 className='text-center text-white mt-2'>Search Nameplates Via</h1> */}
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {/* Card 1 */}
        <div className="relative group w-[120px] sm:w-[150px] md:w-[200px] border bg-[#00000020] hover:bg-[#00000040] cursor-pointer flex flex-col items-center p-4 text-white transition duration-300 ease-in-out transform hover:scale-105" data-aos="fade-right" data-aos-duration="1200" data-aos-once>
          <HiOutlineHome className="text-4xl md:text-5xl" />
          <h1 className="text-sm md:text-2xl mt-2">Home</h1>
          {/* Overlay Button */}
          <div className="absolute inset-0 flex justify-center items-center bg-[#fff] text-black opacity-0 group-hover:opacity-100 transition duration-300">
            <Link to="/collection/home" className="flex items-center gap-1 text-xs md:text-sm font-medium">
              Visit <span className="hidden sm:inline">Collection</span> <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative group w-[120px] sm:w-[150px] md:w-[200px] border bg-[#00000020] hover:bg-[#00000040] cursor-pointer flex flex-col items-center p-4 text-white transition duration-300 ease-in-out transform hover:scale-105" data-aos="zoom-in" data-aos-duration="1200" data-aos-once>
          <MdOutlineVilla className="text-4xl md:text-5xl" />
          <h1 className="text-sm md:text-2xl mt-2">Villa</h1>
          {/* Overlay Button */}
          <div className="absolute inset-0 flex justify-center items-center bg-[#fff] text-black opacity-0 group-hover:opacity-100 transition duration-300">
            <Link to="/collection/villa" className="flex items-center gap-1 text-xs md:text-sm font-medium">
              Visit <span className="hidden sm:inline">Collection</span> <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative group w-[120px] sm:w-[150px] md:w-[200px] border bg-[#00000020] hover:bg-[#00000040] cursor-pointer flex flex-col items-center p-4 text-white transition duration-300 ease-in-out transform hover:scale-105" data-aos="fade-left" data-aos-duration="1200" data-aos-once>
          <PiBuildingOffice className="text-4xl md:text-5xl" />
          <h1 className="text-sm md:text-2xl mt-2">Office</h1>
          {/* Overlay Button */}
          <div className="absolute inset-0 flex justify-center items-center bg-[#fff] text-black opacity-0 group-hover:opacity-100 transition duration-300">
            <Link to="/collection/office" className="flex items-center gap-1 text-xs md:text-sm font-medium">
              Visit <span className="hidden sm:inline">Collection</span> <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

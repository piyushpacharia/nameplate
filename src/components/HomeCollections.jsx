import React from 'react'
import image1 from '../assets/homeCollection/image1.webp'
import image2 from '../assets/homeCollection/image2.webp'
import image3 from '../assets/homeCollection/image3.jpg'
import { FaArrowRight } from 'react-icons/fa'

export default function HomeCollections() {
  return (
    <div className='h-[100%] md:p-20 p-5 flex flex-col justify-center items-center'>
      <h1 className="text-3xl mb-5">Designer Name-plate Collections</h1>
      <div className='flex flex-col md:flex-row gap-2'>
        <div className='border bg-[#00000010] relative overflow-hidden group' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" data-aos-once>
          <div className='flex justify-center items-center'>
            <img src={image2} alt="" className='w-[100%] transition-transform duration-300 group-hover:scale-105 object-cover' />
          </div>
          <h1 className='poppins-medium cursor-pointer p-2 text-lg my-5 flex items-center gap-5 group-hover:gap-10 transition-all duration-300 transform group-hover:translate-x-2'>
            Brass Name Plates <FaArrowRight />
          </h1>
        </div>
        <div className='border bg-[#00000010] relative overflow-hidden group' data-aos="fade-up" data-aos-duration="1200" data-aos-once>
          <div className='flex justify-center items-center'>
            <img src={image1} alt="" className='w-[100%] transition-transform duration-300 group-hover:scale-105 object-cover' />
          </div>
          <h1 className='poppins-medium cursor-pointer p-2 text-lg my-5 flex items-center gap-5 group-hover:gap-10 transition-all duration-300 transform group-hover:translate-x-2'>
            Tapestry <FaArrowRight />
          </h1>
        </div>
        <div className='border bg-[#00000010] relative overflow-hidden group' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="700" data-aos-once>
          <div className='flex justify-center items-center'>
            <img src={image3} alt="" className='w-[100%] transition-transform duration-300 group-hover:scale-105 object-cover' />
          </div>
          <h1 className='poppins-medium cursor-pointer p-2 text-lg my-5 flex items-center gap-5 group-hover:gap-10 transition-all duration-300 transform group-hover:translate-x-2'>
            Mild Steel Name Plates <FaArrowRight />
          </h1>
        </div>
      </div>
      <p className='text-center flex items-center gap-2 pt-10 cursor-pointer' data-aos="fade-up" data-aos-duration="1200" data-aos-once>
        See More Collections <FaArrowRight />
      </p>
    </div>
  )
}

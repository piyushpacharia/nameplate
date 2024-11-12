import React from 'react'
import { FaExpeditedssl } from 'react-icons/fa'
import houseLogo from '../assets/house.svg'
import workLoveLogo from '../assets/love-work.svg'
import collectionLogo from '../assets/collection.svg'
export default function Features() {
  return (
    <div className='h-[100%]  md:p-20 p-5 flex flex-col justify-center items-center  '>
        <h1 className="text-3xl mb-5">Welcome to <span className='font-bold'>YOURNAME</span>. Why buy a nameplate from us?</h1>
      <div className='flex flex-col md:flex-row gap-5'>
        <div className='p-10 border bg-[#00000010] rounded-xl' data-aos="fade-up" data-aos-duration="1200" data-aos-once>
          <div className='flex justify-center items-center'>
           <img src={houseLogo} alt="" className='w-[30%] py-5' />
          </div>
          <h1 className='poppins-semibold text-2xl my-5'>12+ years, 135,000+ name-plates</h1>
          <p>From 2011 to 2023, we have fulfilled over 135,000+ name-plate orders. This has allowed us to master the art and craft of making nameplates.</p>
        </div>
        <div className='p-10 border bg-[#00000010] rounded-xl' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" data-aos-once>
          <div className='flex justify-center items-center'>
          <img src={collectionLogo} alt="" className='w-[30%] py-5' />
          </div>
          <h1 className='poppins-semibold text-2xl my-5'>Exclusive designer collection</h1>
          <p>We have collaborated with renowned designers to launch name-plate collections that not only look great but can also start conversations.</p>
        </div>
        <div className='p-10 border bg-[#00000010] rounded-xl' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="700" data-aos-once>
          <div className='flex justify-center items-center'>
          <img src={workLoveLogo} alt="" className='w-[30%] py-5' />
          </div>
          <h1 className='poppins-semibold text-2xl my-5'>100% love-it guarantee</h1>
          <p>At Housenama, satisfaction just isn't good enough. Either you love it or we'll make it right — guaranteed. That's how we look at quality.</p>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import VideoClip from '../assets/portfolio-video.mp4'
export default function VideoGallery() {
  return (
    <div className='flex justify-center items-center'>
       <video src={VideoClip}  playsInline controls className='w-[100%]'></video>
    </div>
  )
}

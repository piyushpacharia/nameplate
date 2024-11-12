import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import { FaPhotoFilm } from 'react-icons/fa6';

export default function Banner() {
  return (
    <div className='w-full flex gap-10 flex-col justify-center items-center z-10 md:h-screen h-[50vh] px-4'>
      <div className='text-center text-white md:text-5xl text-3xl md:px-20' data-aos="fade-down" data-aos-duration="1200" data-aos-once>
        Give your home that finishing touch

      </div>
      <div className='flex gap-5'>
        <button className='border-2 border-white hover:bg-white hover:text-black text-white flex flex-col md:flex-row gap-2 items-center p-5' data-aos="fade-right" data-aos-duration="1200" data-aos-once>Visit Gallery <FaPhotoFilm />
        </button>
        <button className='border-2 border-white hover:bg-white hover:text-black text-white flex flex-col md:flex-row gap-2 items-center p-5' data-aos="fade-left" data-aos-duration="1200" data-aos-once>Browse Collection <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import { FaArrowRight } from 'react-icons/fa';
// import { FaPhotoFilm } from 'react-icons/fa6';

// export default function Banner() {
//   const [text, setText] = useState('');
//   const [index, setIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [isPaused, setIsPaused] = useState(false); // To pause between phrases
//   const phrases = [
//     "Give your home that finishing touch",
//     "Lorem ipsum dollar 2",
//     "Lorem ipsum dollor 3"
//   ];

//   useEffect(() => {
//     const currentPhrase = phrases[index];
//     const typingSpeed = 80; // Speed of typing
//     const deletingSpeed = 20; // Speed of deleting
//     const pauseTime = 1000; // Pause time before starting to delete

//     if (isPaused) return; // Skip interval when paused (between phrases)

//     const interval = setInterval(() => {
//       if (!isDeleting && text.length < currentPhrase.length) {
//         // Type the text
//         setText(prev => prev + currentPhrase[text.length]);
//       } else if (isDeleting && text.length > 0) {
//         // Delete the text
//         setText(prev => prev.slice(0, -1));
//       } else if (text.length === currentPhrase.length && !isDeleting) {
//         // Wait before starting to delete
//         setIsPaused(true);
//         setTimeout(() => {
//           setIsDeleting(true);
//           setIsPaused(false); // Resume after pause
//         }, pauseTime);
//       } else if (text.length === 0 && isDeleting) {
//         // After deleting, move to next phrase
//         setIsDeleting(false);
//         setIndex((prevIndex) => (prevIndex + 1) % phrases.length);
//       }
//     }, isDeleting ? deletingSpeed : typingSpeed);

//     return () => clearInterval(interval);
//   }, [text, isDeleting, index, phrases, isPaused]);

//   return (
//     <div className='w-full flex gap-10 flex-col justify-center items-center z-10 md:h-screen h-[50vh] px-4'>
//       <div className='text-center h-10 text-white md:text-5xl text-3xl md:px-20'>
//         {text} <span className='text-[#ff2323] font-bold'>|</span>
//       </div>
//       <div className='flex gap-5'>
//         <button className='border-2 border-white hover:bg-white hover:text-black text-white flex flex-col md:flex-row gap-2 items-center p-5'>
//           Visit Gallery <FaPhotoFilm />
//         </button>
//         <button className='border-2 border-white hover:bg-white hover:text-black text-white flex flex-col md:flex-row gap-2 items-center p-5'>
//           Browse Collection <FaArrowRight />
//         </button>
//       </div>
//     </div>
//   );
// }


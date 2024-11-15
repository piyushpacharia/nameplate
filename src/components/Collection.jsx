import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Image imports
import home1 from '../assets/collection/home1.webp';
import home2 from '../assets/collection/home2.webp';
import home3 from '../assets/collection/home3.webp';
import home4 from '../assets/collection/home4.webp';
import home5 from '../assets/collection/home5.webp';
import home6 from '../assets/collection/home6.webp';
import home7 from '../assets/collection/home7.webp';
import home8 from '../assets/collection/home8.webp';
import home9 from '../assets/collection/home9.webp';
import home10 from '../assets/collection/home10.webp';
import home11 from '../assets/collection/home11.webp';
import home12 from '../assets/collection/home12.webp';
import villa1 from '../assets/collection/villa1.webp';
import villa2 from '../assets/collection/villa2.webp';
import villa3 from '../assets/collection/villa3.webp';
import villa4 from '../assets/collection/villa4.webp';
import villa5 from '../assets/collection/villa5.webp';
import villa6 from '../assets/collection/villa6.webp';
import villa7 from '../assets/collection/villa7.webp';
import villa8 from '../assets/collection/villa8.webp';
import villa9 from '../assets/collection/villa9.webp';
import villa10 from '../assets/collection/villa10.webp';
import villa11 from '../assets/collection/villa11.webp';
import villa12 from '../assets/collection/villa12.webp';
import office1 from '../assets/collection/office1.webp';
import office2 from '../assets/collection/office2.webp';
import office3 from '../assets/collection/office3.webp';
import office4 from '../assets/collection/office4.webp';
import office5 from '../assets/collection/office5.webp';
import office6 from '../assets/collection/office6.webp';
import office7 from '../assets/collection/office7.webp';

const Collection = () => {
  const { category } = useParams();
  const [directionFilter, setDirectionFilter] = useState('');

  // Collection data
  const collections = {
    home: [
      { image: home1, name: 'Brass Name Plates', price: 50, direction: 'north' },
      { image: home2, name: 'Tapestry', price: 40, direction: 'east' },
      { image: home3, name: 'Steel Name Plates', price: 60, direction: 'west' },
      { image: home4, name: 'Modern Steel Plates', price: 75, direction: 'south' },
      { image: home5, name: 'Wooden Plates', price: 55, direction: 'east' },
      { image: home6, name: 'Brass Plates', price: 65, direction: 'north' },
      { image: home7, name: 'Elegant Plates', price: 70, direction: 'east' },
      { image: home8, name: 'Gold Steel Plates', price: 80, direction: 'west' },
      { image: home9, name: 'Silver Name Plates', price: 85, direction: 'south' },
      { image: home10, name: 'Black Steel Plates', price: 95, direction: 'east' },
      { image: home11, name: 'White Name Plates', price: 90, direction: 'north' },
      { image: home12, name: 'Transparent Plates', price: 100, direction: 'east' },
    ],
    villa: [
      { image: villa1, name: 'Luxury Villa Plates', price: 120, direction: 'west' },
      { image: villa2, name: 'Elegant Villa Plates', price: 100, direction: 'south' },
      { image: villa3, name: 'Artistic Villa Plates', price: 110, direction: 'east' },
      { image: villa4, name: 'Premium Plates', price: 130, direction: 'north' },
      { image: villa5, name: 'Signature Plates', price: 140, direction: 'east' },
      { image: villa6, name: 'Royal Villa Plates', price: 150, direction: 'west' },
      { image: villa7, name: 'Modern Villa Plates', price: 160, direction: 'south' },
      { image: villa8, name: 'Classic Villa Plates', price: 170, direction: 'east' },
      { image: villa9, name: 'Vintage Villa Plates', price: 180, direction: 'north' },
      { image: villa10, name: 'Contemporary Plates', price: 190, direction: 'east' },
      { image: villa11, name: 'Rustic Villa Plates', price: 200, direction: 'west' },
      { image: villa12, name: 'Minimalist Villa Plates', price: 210, direction: 'south' },
    ],
    office: [
      { image: office1, name: 'Corporate Office Plates', price: 90, direction: 'east' },
      { image: office2, name: 'Minimalist Office Plates', price: 80, direction: 'north' },
      { image: office3, name: 'Professional Office Plates', price: 85, direction: 'east' },
      { image: office4, name: 'Modern Office Plates', price: 95, direction: 'west' },
      { image: office5, name: 'Innovative Office Plates', price: 100, direction: 'south' },
      { image: office6, name: 'Executive Office Plates', price: 105, direction: 'east' },
      { image: office7, name: 'Dynamic Office Plates', price: 110, direction: 'east' },
    ],
  };
  const selectedImages = collections[category] || [];

  // Filter images based on selected direction
  const filteredImages = directionFilter
    ? selectedImages.filter(item => item.direction.toLowerCase() === directionFilter.toLowerCase())
    : selectedImages;
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
    <h1 className="text-center text-3xl py-5">
      {category ? `Collection: ${category.charAt(0).toUpperCase() + category.slice(1)}` : 'Collection'}
    </h1>

    <div className="h-[100%] p-5 flex flex-col justify-center items-center">
      <h1 className="text-3xl mb-5">Designer Name-plate Collections</h1>

      {/* Vastu filter */}
      <div className="mb-5">
        <label htmlFor="direction" className="mr-2">In which direction your {category} is :</label>
        <select
          id="direction"
          value={directionFilter}
          onChange={(e) => setDirectionFilter(e.target.value)}
          className="border px-4 py-2"
        >
          <option value="">All Directions</option>
          <option value="north">North</option>
          <option value="south">South</option>
          <option value="east">East</option>
          <option value="west">West</option>
        </select>
      </div>

      {/* Direction-specific heading */}
      {directionFilter && (
        <h2 className="text-2xl mb-5">
          Name plates that are suitable for your {directionFilter.charAt(0).toUpperCase() + directionFilter.slice(1)} direction
        </h2>
      )}

      {/* Collection display (Responsive Grid) */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center">
        {filteredImages.length > 0 ? (
          filteredImages.map((item, index) => (
            <div
              key={index}
              className="border bg-[#00000010] relative overflow-hidden group"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={`${300 + index * 200}`}
              data-aos-once
            >
              <div className="flex justify-center items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full transition-transform duration-300 group-hover:scale-105 object-cover"
                />
              </div>
              <h1 className="poppins-medium cursor-pointer p-2 text-lg my-5 flex items-center gap-5 group-hover:gap-10 transition-all duration-300 transform group-hover:translate-x-2">
                {item.name} - ₹ {item.price} <FaArrowRight />
              </h1>
            </div>
          ))
        ) : (
          <p>No items found for the selected filter.</p>
        )}
      </div>
    </div>
  </div>
);
};

export default Collection;
import React from 'react'
import About from './About'
import Banner from './Banner'
import Parallax, { Layer } from "react-parallax-scroll";
import { GrGallery } from 'react-icons/gr';
import Gallery from './Gallery';
import Features from './Features';
import HomeCollections from './HomeCollections';
import Testimonials from './Testimonials';

export default function Home() {
  return (
    <div>
      <Parallax>
        <Layer className="home-banner" settings={{ speed: 0.45 }}> 
          <div className="overlay"></div>
          <Banner />  
        </Layer>
      </Parallax>
      <Features />
      <HomeCollections />
      <Gallery />
      <Testimonials />
    </div>
  );
}

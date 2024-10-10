// components/Slider.tsx
"use client"; // Ensure this is marked as a client component in Next.js 13+
import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';


// Dynamically import react-slick
const SlickSlider2 = dynamic(() => import('react-slick'), { ssr: false });

// Define the slider settings
const settings: React.ComponentProps<typeof SlickSlider2> = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,  // Optionally, hide arrows
  autoplay: true, // Optionally, add autoplay
  autoplaySpeed: 3000, // Adjust autoplay speed if needed
};

const HappyClients: React.FC = () => {
  return (
    <SlickSlider2 {...settings}>
      <section className="flex justify-center">
        {/* <Image src="/assets/Group 349.png" alt="Client 1" width={100} height={100} /> */}
        <h1 className='text-black text-center'>szvvcx</h1>
      </section>

      <section className="flex justify-center">
        {/* <Image src="/assets/Group 350.png" alt="Client 2" width={100} height={100} /> */}
        <h1 className='text-black text-center'>szvvcx</h1>
      </section>

      <section className="flex justify-center">
        {/* <Image src="/assets/Group 351.png" alt="Client 3" width={100} height={100} /> */}
        <h1 className='text-black text-center'>szvvcx</h1>
      </section>
    </SlickSlider2>
  );
};


export default HappyClients;

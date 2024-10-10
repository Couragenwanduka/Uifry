// components/Slider.tsx
"use client"; // Ensure this is marked as a client component in Next.js 13+
import React from 'react';
import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickSlider = dynamic(() => import('react-slick'), { ssr: false });

// Define the slider settings
const settings: React.ComponentProps<typeof SlickSlider> = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
};

const Treatment: React.FC = () => {
  return (
    <SlickSlider {...settings}>
      <section className='bg-lightBlue w-full h-[24rem] flex justify-center items-center p-5'>
            <div className="bg-white w-[100%]  flex flex-col justify-center items-center text-center h-72 gap-2 pt-5 pb-5 rounded-md mt-2 ">
                <span className="bg-skyBlue w-12 h-12 flex justify-center
                items-center rounded-full">
                    <img src="/icons/teeth 1.svg" className="h-8 w-8"/>
                </span>
                <h1 className="text-darkBlue font-semibold">Root Canal Treatment</h1>
                <p className="break-words w-11/12 text-bodyText">Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.</p>
                <span className="flex justify-center items-center gap-2 text-darkBlue">
                    <p className="flex gap-2 border-b ">learn more </p>
                    <img src="/icons/Group 1171274941.svg"/>
                </span>
            </div>
      </section>
      <section className='bg-lightBlue w-full h-[20rem] flex justify-center items-center p-5'>
            <div className="bg-white flex flex-col justify-center items-center text-center h-72 gap-2 pt-5 pb-5 rounded-md ">
                <span className="bg-skyBlue w-12 h-12 flex justify-center
                items-center rounded-full">
                    <img src="/icons/smile 1.svg" className="h-8 w-8"/>
                </span>
                <h1 className="text-darkBlue font-semibold">Cosmetic Dentist</h1>
                <p className="break-words w-10/12 text-bodyText">Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.</p>
                <span className="flex justify-center items-center gap-2 text-darkBlue">
                    <p className="flex gap-2 border-b ">learn more </p>
                    <img src="/icons/Group 1171274941.svg"/>
                </span>
            </div>
      </section>
      <section className='bg-lightBlue w-full h-[20rem] flex justify-center items-center p-5'>
            <div className="bg-white flex flex-col justify-center items-center text-center h-72 gap-2 pt-5 pb-5 rounded-md ">
                <span className="bg-skyBlue w-12 h-12 flex justify-center
                items-center rounded-full">
                    <img src="/icons/implant 1.svg" className="h-8 w-8"/>
                </span>
                <h1 className="text-darkBlue font-semibold">Dental Implants</h1>
                <p className="break-words w-10/12 text-bodyText">A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.</p>
                <span className="flex justify-center items-center gap-2 text-darkBlue">
                    <p className="flex gap-2 border-b ">learn more </p>
                    <img src="/icons/Group 1171274941.svg"/>
                </span>
                
            </div>
      </section>
      <section className='bg-lightBlue w-full h-[20rem] flex justify-center items-center p-5'>
      <div className="bg-white flex flex-col justify-center items-center text-center h-72 gap-2 pt-5 pb-5 rounded-md">
         <span className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full">
            <img src="/icons/tooth 1.svg" className="h-8 w-8"/>
         </span>
         <h1 className="text-darkBlue font-semibold">Teeth Whitening</h1>
         <p className="break-words w-10/12 text-bodyText">It's never been easier to brighten your smile at home. There are all kinds of products you can try.</p>
         <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img src="/icons/Group 1171274941.svg"/>
         </span>
      </div>
      </section>

      <section className='bg-lightBlue w-full h-[20rem] flex justify-center items-center p-5'>
      <div className="bg-white flex flex-col justify-center items-center text-center h-72 gap-2 pt-5 pb-5 rounded-md">
         <span className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full">
            <img src="/icons/dental 1.svg" className="h-8 w-8"/>
         </span>
         <h1 className="text-darkBlue font-semibold">Emergency Dentistry</h1>
         <p className="break-words w-10/12 text-bodyText">In general, any dental problem that needs immediate treatment to stop bleeding, alleviate severe pain.</p>
         <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img src="/icons/Group 1171274941.svg"/>
         </span>
      </div>
      </section>
      <section className='bg-lightBlue w-full h-[20rem] flex justify-center items-center p-5'>
      <div className="bg-white flex flex-col justify-center items-center text-center h-72 gap-2 pt-5 pb-5 rounded-md">
         <span className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full">
            <img src="/icons/implant 1.svg" className="h-8 w-8"/>
         </span>
         <h1 className="text-darkBlue font-semibold">Prevention</h1>
         <p className="break-words w-10/12 text-bodyText">Preventive dentistry is dental care that helps maintain good oral health. a combination of regular dental.</p>
         <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img src="/icons/Group 1171274941.svg"/>
         </span>
      </div> 
      </section>
    </SlickSlider>
  );
};

export default Treatment;

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Headertext from '../text/Headertext';
import BodyText from '../text/Bodytext';

const DentalDiv = () => {
  return (
    <section className="flex  justify-center items-center mt-10 md:mt-0 bg-white h-screen">
      <div className="bg-darkBlue flex flex-col lg:flex-row lg:w-[80%] md:p-10 p-5 rounded-md">
        <div>
          <Headertext
            className="text-white lg:w-9/12 text-4xl"
            content="Dental Website that's Gonna shake the game rules up."
          />
          <BodyText
            className="mt-5 text-white lg:w-8/12"
            content="We use only the best quality materials on the market in order to provide the best products to our patients."
          />
          <button className="mt-5 bg-midBlue w-28 h-10 rounded-md">
            Learn More
          </button>
        </div>
        <div className="lg:w-[50%] mt-6 md:mt-0 ">
          <img src="/assets/Rectangle 655.png" className="w-full h-full" alt='' loading="lazy"  />
        </div>
      </div>
    </section>
  );
};

export default DentalDiv;

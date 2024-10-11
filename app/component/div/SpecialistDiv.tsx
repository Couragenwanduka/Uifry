/* eslint-disable @next/next/no-img-element */
// import NavBar from '@/app/component/nav/navBar';
import BodyText from '@/app/component/text/Bodytext';
import Headertext from '@/app/component/text/Headertext';
import React, {  useState } from 'react';

export const SpecialistDiv = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section className="w-full md:h-[33rem] bg-lightBlue flex flex-col mt-20  justify-center items-center gap-5 pb-10">
      <Headertext
        className="md:text-center mt-10"
        content="Meet our specialists"
      />
      <BodyText
        className="text-center "
        content="We use only the best quality materials on the market in order to provide the best products to our patients."
      />
      <div className=" md:flex-row gap-2 hidden md:flex">
        <img alt='' src="/assets/Group 1000001016.svg" loading="lazy"  />
        <img alt='' src="/assets/Group 1000001017.svg" loading="lazy"  />
        <img alt='' src="/assets/Group 1000001018.svg" loading="lazy"  />
        <img alt='' src="/assets/Group 1000001019.svg" loading="lazy"  />
      </div>
      <div className="md:hidden flex flex-col  items-center">
        <img alt='' src="/assets/Group 1000001016.svg" className="w-full" />
        {isOpen && (
          <div className="flex flex-col gap-4 mt-5">
            <img alt='' src="/assets/Group 1000001017.svg" loading="lazy"  />
            <img alt='' src="/assets/Group 1000001018.svg" loading="lazy"  />
            <img alt='' src="/assets/Group 1000001019.svg" loading="lazy"  />
          </div>
        )}
        <button
          className="bg-midBlue h-10 w-32 text-sm rounded-md text-white mt-5"
          onClick={handleToggleMenu}
        >
          View All Member
        </button>
      </div>
      {/* <img src="/assets/Frame 176.svg"/> */}
    </section>
  );
};

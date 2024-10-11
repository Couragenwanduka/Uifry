{/* eslint-disable-next-line react/no-unescaped-entities */}
'use client';
import NavBar from '@/app/component/nav/navBar';
import BodyText from '@/app/component/text/Bodytext';
import Headertext from '@/app/component/text/Headertext';
import Footer from '@/app/component/Footer/footer';
import React from 'react';
import Treatment from '@/app/component/slides/Treatment';
import { SpecialistDiv } from '@/app/component/div/SpecialistDiv';
import PatientDiv from '@/app/component/div/patientDiv';
import DentalDiv from '@/app/component/div/DentalDiv';

export default function Service() {
  //
  return (
    <main className="font-sans w-full overflow-hidden h-full bg-lightBlue">
      <NavBar className="bg-white border-b md:border-none border-midBlue" />
      {/* Your home page content goes here */}
      <article className="flex flex-col md:justify-center md:items-center mt-40 md:mt-0 p-5 md:p-0">
        <Headertext className="md:text-center" content="Services" />
        <BodyText
          className="md:text-center break-words lg:w-5/12"
          content="We use only the best quality materials on the market in order to provide the best products to our patients."
        />
      </article>

      <section className="bg-lightBlue  hidden md:flex h-80 justify-center items-center gap-6 p-10 lg:w-[100%]  rounded-md">
        <div className="bg-white flex flex-col justify-center items-center text-center lg:h-56 md:h-[16rem] gap-2 pt-5 pb-5 rounded-md">
          <span
            className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full"
          >
            <img src="/icons/teeth 1.svg" className="h-8 w-8" />
          </span>
          <h1 className="text-darkBlue">Root Canal Treatment</h1>
          <p className="break-words lg:w-10/12 text-bodyText">
            Root canal treatment endodontics is a dental procedure used to
            treat infection at the centre of a tooth.
          </p>
          <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img src="/icons/Group 1171274941.svg" />
          </span>
        </div>
        <div className="bg-white flex flex-col justify-center items-center text-center lg:h-56 gap-2 pt-5 pb-5 rounded-md">
          <span
            className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full"
          >
            <img src="/icons/smile 1.svg" className="h-8 w-8" />
          </span>
          <h1 className="text-darkBlue">Cosmetic Dentist</h1>
          <p className="break-words lg:w-10/12 text-bodyText">
            Cosmetic dentistry is the branch of dentistry that focuses on
            improving the appearance of your smile.
          </p>
          <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img src="/icons/Group 1171274941.svg" />
          </span>
        </div>
        <div className="bg-white flex flex-col justify-center items-center text-center lg:h-56 gap-2 pt-5 pb-5 rounded-md">
          <span
            className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full"
          >
            <img src="/icons/implant 1.svg" className="h-8 w-8" />
          </span>
          <h1 className="text-darkBlue">Dental Implants</h1>
          <p className="break-words lg:w-10/12 text-bodyText">
            A dental implant is an artificial tooth root thats placed into your
            jaw to hold a prosthetic tooth or bridge.
          </p>
          <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img src="/icons/Group 1171274941.svg" />
          </span>
        </div>
      </section>

      <section className="bg-lightBlue  hidden md:flex h-80 justify-center items-center gap-6 p-10 lg:w-[100%] rounded-md -mt-10">
        <div className="bg-white flex flex-col justify-center items-center text-center lg:h-56 md:h-[16rem] gap-2 pt-5 pb-5 rounded-md">
          <span
            className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full"
          >
            <img src="/icons/tooth 1.svg" className="h-8 w-8" />
          </span>
          <h1 className="text-darkBlue">Teeth Whitening</h1>
          <p className="break-words lg:w-10/12 text-bodyText">
            Its never been easier to brighten your smile at home. There are all
            kinds of products you can try.
          </p>
          <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img src="/icons/Group 1171274941.svg" />
          </span>
        </div>
        <div className="bg-white flex flex-col justify-center items-center text-center lg:h-56 gap-2 pt-5 pb-5 rounded-md">
          <span
            className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full"
          >
            <img src="/icons/dental 1.svg" className="h-8 w-8" />
          </span>
          <h1 className="text-darkBlue">Emergency Dentistry</h1>
          <p className="break-words lg:w-10/12 text-bodyText">
            In general, any dental problem that needs immediate treatment to
            stop bleeding, alleviate severe pain.
          </p>
          <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img src="/icons/Group 1171274941.svg" />
          </span>
        </div>
        <div className="bg-white flex flex-col justify-center items-center text-center lg:h-56 gap-2 pt-5 pb-5 rounded-md">
          <span
            className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full"
          >
            <img src="/icons/implant 1.svg" className="h-8 w-8" />
          </span>
          <h1 className="text-darkBlue">Prevention</h1>
          <p className="break-words lg:w-10/12 text-bodyText">
            Preventive dentistry is dental care that helps maintain good oral
            health. a combination of regular dental.
          </p>
          <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img src="/icons/Group 1171274941.svg" />
          </span>
        </div>
      </section>

      <section className="md:hidden bg-lightBlue -mt-5">
        <Treatment />
      </section>

      <section className="flex flex-col md:flex-row w-full h-full lg:p-20 p-5 mt-20 bg-darkBlue border-bottom-shadow gap-5 md:gap-0">
        <div>
          <Headertext
            className="break-words md:w-12/12 w-full md:text-left text-pretty text-white"
            content=" Leave your worries at the door and enjoy a healthier, more precise smile"
          />
          <BodyText
            className="break-words md:w-10/12 w-full mt-4  md:text-left text-pretty text-white"
            content="We use only the best quality materials on the market in order to provide the best products to our patients, So dont worry about anything and book yourself."
          />
          <div className="flex items-center">
            <button className="bg-midBlue h-12 w-40 gap-4 text-white text-lg rounded-md mt-8 flex justify-center items-center">
              learn More <img src="/icons/Group 1171274941.svg" />
            </button>
          </div>
        </div>
        <div className="w-full h-full mb-10 md:mb-0">
          <form className="flex bg-white md:w-[90%] h-80 flex-col  items-center rounded-md gap-4">
            <h1 className="text-darkBlue text-2xl font-semibold font-sans mt-10">
              Request Appointment
            </h1>
            <input
              type="text"
              placeholder="Full name"
              className="w-[90%] h-10 border border-midBlue focus:outline-none rounded-md pl-4 text-darkBlue"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="w-[90%] h-10 border border-midBlue focus:outline-none rounded-md pl-4 text-darkBlue"
            />
            <input
              type="text"
              placeholder="Email Address"
              className="w-[90%] h-10 border border-midBlue focus:outline-none rounded-md pl-4  text-darkBlue"
            />
            <button className="bg-midBlue w-40 h-10 rounded-md">submit</button>
          </form>
        </div>
      </section>

      <section>
        <PatientDiv />
      </section>

      <section>
        <SpecialistDiv />
      </section>

      <section>
        <DentalDiv />
      </section>
      <section className="mb-10 mt-20">
        <Footer />
      </section>
    </main>
  );
}

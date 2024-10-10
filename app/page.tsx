"use client";
import NavBar from "./component/nav/navBar";
import BodyText from "./component/text/Bodytext";
import Headertext from "./component/text/Headertext";
import Footer from "./component/Footer/footer";
import React, { useRef, useState }  from "react";
import Treatment from "./component/slides/Treatment";
import HappyClients from "./component/slides/happycilents";
import { SpecialistDiv } from "@/app/component/div/SpecialistDiv";
import PatientDiv  from "@/app/component/div/patientDiv";
import DentalDiv from "@/app/component/div/DentalDiv";



export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
      setIsOpen(!isOpen);
  };

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleMouseOver = () => {
    videoRef.current?.play();
  };

  const handleMouseOut = () => {
    videoRef.current?.pause();
  };

  return (
   <main className="font-sans w-full overflow-hidden h-full">
     <NavBar className="bg-lightBlue" />
     {/* Your home page content goes here */}
     <section className="flex md:flex-row flex-col lg:w-[95%] justify-center md:pl-10 p-5 mt-32 md:mt-0">
           <article>
                <div>
                    <h1 className="text-darkBlue md:text-5xl text-4xl font-sans font-bold">Get ready for your best ever Dental Experience!</h1>
                    <div className="w-[90%] flex justify-end">
                    <img src="/icons/strek.svg" className="w-9/12 flex items-end mt-2"/>
                    </div>
                    <p className="text-bodyText break-words text-sm md:w-10/12 mt-4">We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself.</p>
                </div>
                <div className="flex mt-5 gap-5 font-sans  items-center">
                    <button className="bg-midBlue h-10 text-sm md:w-44 w-40 rounded-md font-semibold text-white">Book an appointment</button>
                    <div className="flex gap-4 justify-center items-center">
                       <img src="/icons/phone.svg" alt="Phone" className="h-10 border border-skyBlue p-2 rounded-md"/>
                       <span className="">
                          <p className="text-midBlue md:text-sm text-xs font-semibold">Dental 24H Emergency</p>
                          <p className="text-bodyText text-sm">0900-78601</p>
                       </span>
                    </div>
                </div>
                <div className="flex justify-start items-start w-full md:-ml-10">
                     <img src="/icons/div.svg" className=""/>
                </div>
           </article>
           <div className="hidden md:block">
            <img src="/assets/nurse.png" className="h-[104%]"/>
           </div>
           {/* mobile */}
           <div className="md:hidden flex justify-center items-center -ml-20">
            <img src="/assets/nurse.png" className="h-[120%]"/>
           </div>
     </section>

     <section className="bg-lightBlue  hidden md:flex h-80 justify-center items-center gap-6 p-10 lg:w-[95%] lg:ml-8 rounded-md">
      <div className="bg-white flex flex-col justify-center items-center text-center lg:h-56 md:h-[16rem] gap-2 pt-5 pb-5 rounded-md">
         <span className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full">
            <img src="/icons/teeth 1.svg" className="h-8 w-8"/>
         </span>
         <h1 className="text-darkBlue">Root Canal Treatment</h1>
         <p className="break-words lg:w-10/12 text-bodyText">Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth.</p>
         <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img src="/icons/Group 1171274941.svg"/>
         </span>
      </div>
      <div className="bg-white flex flex-col justify-center items-center text-center lg:h-56 gap-2 pt-5 pb-5 rounded-md">
         <span className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full">
            <img src="/icons/smile 1.svg" className="h-8 w-8"/>
         </span>
         <h1 className="text-darkBlue">Cosmetic Dentist</h1>
         <p className="break-words lg:w-10/12 text-bodyText">Cosmetic dentistry is the branch of dentistry that focuses on improving the appearance of your smile.</p>
         <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img src="/icons/Group 1171274941.svg"/>
         </span>
      </div>
      <div className="bg-white flex flex-col justify-center items-center text-center lg:h-56 gap-2 pt-5 pb-5 rounded-md">
         <span className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full">
            <img src="/icons/implant 1.svg" className="h-8 w-8"/>
         </span>
         <h1 className="text-darkBlue">Dental Implants</h1>
         <p className="break-words lg:w-10/12 text-bodyText">A dental implant is an artificial tooth root that’s placed into your jaw to hold a prosthetic tooth or bridge.</p>
         <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img src="/icons/Group 1171274941.svg"/>
         </span>
      </div>
     </section>

     <section className="md:hidden bg-lightBlue -mt-5">
          <Treatment/>
     </section>

     <section className="flex flex-col md:flex-row md:w-[95%] h-full lg:ml-8 md:ml-4  lg:p-20 mt-20">
          <div>
               <Headertext className="break-words md:w-9/12 w-full text-center md:text-left text-pretty" content="We’re welcoming new patients and can’t wait to meet you."/>
               <BodyText className="break-words md:w-7/12 w-full mt-4 text-center md:text-left text-pretty" content="We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself."/>
               <div className="flex items-center">
                <span className="flex mt-8 border border-midBlue w-72 h-12 p-2 items-center rounded-l-md gap-2 ml-2 md:ml-0">
                    <img src="/icons/smallPhone.svg" className="w-6 h-6"/>
                    <input type="text" placeholder="Enter your Phone Number" className="w-full h-full focus:outline-none text-black"/>
                </span>
                <button className="bg-midBlue h-12 w-28 rounded-r-md mt-8">submit</button>
               </div>
          </div>
          <div className="hidden md:flex">
            <img src="/assets/smillingBoy.png" className="h-full"/>
          </div>
          <div className="md:hidden mt-5">
            <img src="/assets/smillingBoyMoblie.png" className="h-full"/>
          </div>
     </section>

     <section className="flex flex-col-reverse lg:flex-row justify-between lg:p-32 bg-lightBlue lg:w-[95%] w-full lg:ml-8 mt-6 md:mt-7 lg:mt-0 p-5">
      <div className="lg:w-[50%]">
        <img src="/assets/Rectangle 631.png" className="h-full md:w-full"/>
      </div>
      <div className="lg:w-[60%] lg:ml-10">
        <Headertext className="break-words w-full" content="Why choose Smile for all your dental treatments?"/>
        <BodyText className="break-words lg:w-9/12 mt-5" content="We use only the best quality materials on the market in order to provide the best products to our patients."/>
        <ul className="font-sans text-darkBlue mt-5 flex flex-col gap-4  ">
          <li className="flex gap-3"><span>
             <img src="/icons/tick.svg"/>
            </span> 
            Top quality dental team
            </li>
          <li className="flex gap-3"><span>
             <img src="/icons/tick.svg"/>
            </span>
            State of the art dental services
             </li>
          <li className="flex gap-3"><span>
             <img src="/icons/tick.svg"/>
            </span>
            Discount on all dental treatment
             </li>
          <li className="flex gap-3"><span>
             <img src="/icons/tick.svg"/>
            </span> 
            Enrollment is quick and easy
            </li>
        </ul>
        <button className="bg-midBlue w-52 h-10 mt-5 rounded-md mb-5 lg:mb-0 ">Book an appointment</button>
      </div>
     </section>

     <section className="flex flex-col lg:flex-row md:w-[95%] h-full  lg:ml-10 md:ml-4 mt-10 md:mt-0 lg:p-14 p-5">
       <div className=" flex flex-col gap-">
          <Headertext className="break-words md:w-11/12 w-full  md:text-left text-pretty" content="Leave your worries at the door and enjoy a healthier, more precise smile"/>
          <BodyText className="break-words md:w-9/12 w-full mt-4  md:text-left text-pretty" content="We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself."/>
          <button className="bg-midBlue w-52 h-10 mt-5 rounded-md ">Book an appointment</button>
       </div>
       <div className=" w-full" >
         <img src="/icons/fixingTeeth.svg" className=" hidden lg:block w-full"/>
         <img src="/assets/Mask group.png" className="h-full lg:hidden md:w-full w-full mt-5"/>
       </div>
     </section>

     <section>
                <PatientDiv/>
            </section>

            <section>
                <SpecialistDiv/>
            </section>

     <section className="flex flex-col justify-center items-center mt-10">
      <Headertext content="Our Happy Clients"/>
      <BodyText content="We use only the best quality materials on the market in order to provide the best products to our patients."/>
      <div className=" hidden md:flex">
        <img src="/assets/Group 349.png" className="size-96"/>
        <img src="/assets/Group 350.png" className="size-96"/>
        <img src="/assets/Group 351.png" className="size-96"/>
      </div>
      {/* <div className="md:hidden flex flex-row">
         <HappyClients/>
      </div> */}
     </section>

     <section>
                <DentalDiv/>
            </section>

     <section className="mb-10 mt-10">
        <Footer/>
     </section>
   </main>
  );
}

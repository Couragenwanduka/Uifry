"use client";
import NavBar from "@/app/component/nav/navBar";
import BodyText from "@/app/component/text/Bodytext";
import Headertext from "@/app/component/text/Headertext";
import Footer from "@/app/component/Footer/footer";
import React, { useRef, useState }  from "react";
import Treatment from "@/app/component/slides/Treatment";

export default function Service() {
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
   <main className="font-sans w-full overflow-hidden h-full bg-lightBlue">
     <NavBar className="bg-white border-b md:border-none border-midBlue" />
     {/* Your home page content goes here */}
    <article className="flex flex-col md:justify-center md:items-center mt-40 md:mt-0 p-5 md:p-0">
         <Headertext className="md:text-center" content="Services"/>
         <BodyText className="md:text-center break-words lg:w-5/12" content="We use only the best quality materials on the market in order to provide the best products to our patients."/>
    </article>

     <section className="bg-lightBlue  hidden md:flex h-80 justify-center items-center gap-6 p-10 lg:w-[100%]  rounded-md">
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

     <section className="bg-lightBlue  hidden md:flex h-80 justify-center items-center gap-6 p-10 lg:w-[100%] rounded-md -mt-10">
      <div className="bg-white flex flex-col justify-center items-center text-center lg:h-56 md:h-[16rem] gap-2 pt-5 pb-5 rounded-md">
         <span className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full">
            <img src="/icons/tooth 1.svg" className="h-8 w-8"/>
         </span>
         <h1 className="text-darkBlue">Teeth Whitening</h1>
         <p className="break-words lg:w-10/12 text-bodyText">It's never been easier to brighten your smile at home. There are all kinds of products you can try.</p>
         <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img src="/icons/Group 1171274941.svg"/>
         </span>
      </div>
      <div className="bg-white flex flex-col justify-center items-center text-center lg:h-56 gap-2 pt-5 pb-5 rounded-md">
         <span className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full">
            <img src="/icons/dental 1.svg" className="h-8 w-8"/>
         </span>
         <h1 className="text-darkBlue">Emergency Dentistry</h1>
         <p className="break-words lg:w-10/12 text-bodyText">In general, any dental problem that needs immediate treatment to stop bleeding, alleviate severe pain.</p>
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
         <h1 className="text-darkBlue">Prevention</h1>
         <p className="break-words lg:w-10/12 text-bodyText">Preventive dentistry is dental care that helps maintain good oral health. a combination of regular dental.</p>
         <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img src="/icons/Group 1171274941.svg"/>
         </span>
      </div> 
     </section>


     <section className="md:hidden bg-lightBlue -mt-5">
          <Treatment/>
     </section>

     <section className="flex flex-col md:flex-row w-full h-full lg:p-20 p-5 mt-20 bg-darkBlue border-bottom-shadow gap-5 md:gap-0">
          <div>
               <Headertext className="break-words md:w-12/12 w-full md:text-left text-pretty text-white" content=" Leave your worries at the door and enjoy a healthier, more precise smile"/>
               <BodyText className="break-words md:w-10/12 w-full mt-4  md:text-left text-pretty text-white" content="We use only the best quality materials on the market in order to provide the best products to our patients, So don’t worry about anything and book yourself."/>
               <div className="flex items-center">
                <button className="bg-midBlue h-12 w-40 gap-4 text-white text-lg rounded-md mt-8 flex justify-center items-center">learn More <img src="/icons/Group 1171274941.svg"/></button>
               </div>
          </div>
          <div className="w-full h-full">
              <form className="flex bg-white md:w-[90%] h-80 flex-col  items-center rounded-md gap-4">
                  <h1 className="text-darkBlue text-2xl font-semibold font-sans mt-10">Request Appointment</h1>
                  <input type="text" placeholder="Full name" className="w-[90%] h-10 border border-midBlue focus:outline-none rounded-md pl-4 text-darkBlue"/>
                  <input type="text" placeholder="Phone Number" className="w-[90%] h-10 border border-midBlue focus:outline-none rounded-md pl-4 text-darkBlue"/>
                  <input type="text" placeholder="Email Address" className="w-[90%] h-10 border border-midBlue focus:outline-none rounded-md pl-4  text-darkBlue"/>
                  <button className="bg-midBlue w-40 h-10 rounded-md">submit</button>
              </form>
          </div>
     </section>

    

    

     <section className="flex flex-col justify-center items-center w-full h-[150%] gap-2 bg-white">
      <Headertext  className="break-words md:w-9/12 md:text-center mt-10 p-5 md:p-0" content="We’re welcoming new patients and can’t wait to meet you."/>
      <BodyText   className="break-words md:w-6/12 md:text-center p-5 md:p-0 -mt-10 md:mt-0" content="We use only the best quality materials on the market in order to provide the best products to our patients."/>
      <video
        ref={videoRef}
        src="/video/6529143-uhd_4096_2160_25fps.mp4"
        className="video-embed w-full md:h-[32rem] h-[20rem] rounded-xl mb-20"
        muted
        loop
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      />
     </section>

     <section className="w-full md:h-[33rem] bg-lightBlue flex flex-col mt-20  justify-center items-center gap-5 pb-10">
      <Headertext className="md:text-center" content="Meet our specialists"/>
      <BodyText className="text-center " content="We use only the best quality materials on the market in order to provide the best products to our patients."/>
      <div className=" md:flex-row gap-2 hidden md:flex">
         <img src="/assets/Group 1000001016.svg"/>
         <img src="/assets/Group 1000001017.svg"/>
         <img src="/assets/Group 1000001018.svg"/>
         <img src="/assets/Group 1000001019.svg"/>
      </div>
      <div className="md:hidden flex flex-col  items-center">
          <img src="/assets/Group 1000001016.svg" className="w-full"/>
          {isOpen && (
              <div className="flex flex-col gap-4 mt-5">
                <img src="/assets/Group 1000001017.svg"/>
                <img src="/assets/Group 1000001018.svg"/>
                <img src="/assets/Group 1000001019.svg"/>
              </div>
                    )}
            <button className="bg-midBlue h-10 w-32 text-sm rounded-md text-white mt-5" onClick={handleToggleMenu}>View All Member</button>
          </div>
      {/* <img src="/assets/Frame 176.svg"/> */}

     </section>

     <section className="flex  justify-center items-center mt-10 md:mt-0 bg-white h-screen">
          <div className="bg-darkBlue flex flex-col lg:flex-row lg:w-[80%] md:p-10 p-5 rounded-md">
              <div>
                  <Headertext className="text-white lg:w-9/12 text-4xl" content="Dental Website that's Gonna shake the game rules up."/>
                  <BodyText className="mt-5 text-white lg:w-8/12" content="We use only the best quality materials on the market in order to provide the best products to our patients."/>
                  <button className="mt-5 bg-midBlue w-28 h-10 rounded-md">Learn More</button>
              </div>
              <div className="md:w-[50%] mt-6 md:mt-0 ">
                <img src="/assets/Rectangle 655.png" className="w-full h-full"/>
                </div>
          </div>
     </section>

     <section className="mb-10 mt-20">
        <Footer/>
     </section>
   </main>
  );
}

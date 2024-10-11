/* eslint-disable @next/next/no-img-element */

'use client';
import NavBar from '@/app/component/nav/navBar';
import BodyText from '@/app/component/text/Bodytext';
import Headertext from '@/app/component/text/Headertext';
import Footer from '@/app/component/Footer/footer';
import React from 'react';
// import { SpecialistDiv } from '@/app/component/div/SpecialistDiv';
import PatientDiv from '@/app/component/div/patientDiv';
// import DentalDiv from '@/app/component/div/DentalDiv';
import AboutSpecialistDiv from '@/app/component/div/aboutSpecialistDiv';
import Treatment from '@/app/component/slides/Treatment';

export default function About() {
  return (
    <main className="font-sans w-full overflow-hidden h-full bg-white">
      <NavBar className="bg-lightBlue border-b md:border-none border-midBlue" />

      {/* Home page content */}
      <article className="flex flex-col md:justify-center md:items-center mt-40 md:mt-0 p-5 md:p-0">
        <Headertext
          className="md:text-center text-6xl font-bold"
          content="About Us"
        />
      </article>

      <section className="w-full lg:h-[36rem] mt-10 flex flex-col lg:flex-row md:p-10 p-5">
        <article className="flex flex-col gap-5">
          <Headertext content="Our Mission" />
          <BodyText
            className="break-words lg:w-10/12"
            content="At Northern Heights Dental, people come first. We help each of our patients to achieve optimal wellness and health by using a whole body approach to oral health. This means not just focusing on cavities, but focusing on; cranio-facial development, bite and joint balance, oral flora, proper muscle balance/function, and bio-compatibility of dental materials. Great care and planning ensure that everything we do helps promote overall health and well being."
          />
          <h1 className="text-darkBlue font-sans text-3xl font-semibold">
            More than anything else we love creating happy, healthy smiles.
          </h1>
          <BodyText
            className="break-words lg:w-10/12"
            content="We work hard to stay up to date with the most advanced techniques and technologies to ensure that our patients receive the best care possible. Our office utilizes 3D CBCT radiographs to allow for guided surgical and endodontic protocols. This enables these procedures to performed digitally before they are performed surgically to ensure optimal results. 3D imaging also is utilized for the analysis of airway growth and development. We also use the best 3D optical scanner for all of our dental restoration and Invisalign impressions. Dr Williams is a strong advocate for using microsurgical techniques, this means less discomfort and faster healing times."
          />
        </article>
        <img alt='' src="/assets/AboutPage.png" />
      </section>

      <section className="flex flex-col justify-center items-center mt-16">
        <article>
          <Headertext className="text-center" content="Meet our Specialists" />
          <BodyText
            className="break-words w-9/12 md:text-center ml-10 md:ml-20 lg:ml-36 mt-5"
            content="We use only the best quality materials on the market in order to provide the best products to our patients."
          />
        </article>
        <section className=" flex flex-col justify-center items-center w-full md:pl-10 p-5 gap-5 mt-10">
          <AboutSpecialistDiv
            image={'/assets/aboutSpecialist1.png'}
            name={'DR. Brent'}
            specility={'( Specility in General & Cosmetic Service )'}
            text={
              'Dr. Brent provides general and cosmetic dentistry services at Northern Heights Dental in Flagstaff, Arizona. He has extensive experience in general and cosmetic dentistry, including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.  Dr. Brent and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.'
            }
            link={'#'}
          />
          <AboutSpecialistDiv
            image={'/assets/aboutSpecialist2.png'}
            name={'DR. Ashish J. Vashi'}
            specility={'( Specility in implant dentistry )'}
            text={
              'Dr. Ashish J. Vashi has been practicing general, cosmetic and implant dentistry in California for over 18 years. He believes in giving the highest quality dentistry in a comfortable, caring environment. He strives to get to know his patients, not just their teeth.including full mouth restoration, dental veneers, crowns, bridges, dental implants, wisdom teeth extractions, Invisalign, and dentures.'
            }
            link={'#'}
          />
          <AboutSpecialistDiv
            image={'/assets/aboutSpecialist3.png'}
            name={'Dr. James Connors'}
            specility={'( Specility in Oral Surgeon )'}
            text={
              'When it comes to oral surgeons, few can compare to the modern-day legend that is Dr. James Connors. As our oral and maxillofacial surgery specialist, Dr. Connors will brighten your day with his seasoned expertise, welcoming conversations, and – of course – his signature rotation of fun bowties. Dr. Connors and his younger sister grew up in Massachusetts with a mother who worked as a hygienist and a grandfather who was a general dentist.'
            }
            link="#"
          />
        </section>
      </section>

      <section className="md:p-10 p-5 h-full">
        <Headertext className="text-center" content="Latest Technology" />
        <BodyText
          className="break-words lg:w-9/12 text-center lg:ml-36 mt-5"
          content="Thanks to major technological advancements, dentistry allows treating the most complex cases with less time and more efficiency."
        />
        <section className="flex flex-col lg:flex-row w-full h-80 lg:p-5 gap-5 mt-10 md:mt-0">
          <img alt='' src="/assets/technology.png" />
          <div>
            <h1 className="text-darkBlue text-lg font-semibold">
              The Future of Dentistry is Digital:
            </h1>
            <BodyText
              className="break-words lg:w-10/12 mt-3"
              content="Dentists today already utilize software to capture insights in clinical decision-making. These practices will continue to develop to integrate AI algorithms that enable clinicians to find the best modalities for their patients."
            />
            <BodyText
              className="break-words lg:w-10/12 mt-2"
              content="In the 21st century, digital radiographs and 3D imaging have become the standard of dental care. Using an intraoral scanner with digitized data for 3D dental impressions (vs. polyvinyl siloxane and rubber base impressions) for a dental crown is now commonplace."
            />
            <BodyText
              className="break-words lg:w-10/12 mt-2"
              content="Artificial intelligence is laying the groundwork for the future of the dental industry. Dental robots can now perform functions such as filling cavities and cleaning or extracting teeth"
            />
          </div>
        </section>
      </section>

      <section className="bg-darkBlue hidden md:flex h-80 justify-center items-center gap-6 p-10 lg:w-[95%] lg:ml-8 rounded-md mt-[35rem] lg:mt-0">
        <div className="bg-white flex flex-col justify-center items-center text-center lg:h-56 md:h-[16rem] gap-2 pt-5 pb-5 rounded-md">
          <span
            className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full"
          >
            <img alt='' src="/icons/teeth 1.svg" className="h-8 w-8" />
          </span>
          <h1 className="text-darkBlue">Root Canal Treatment</h1>
          <p className="break-words lg:w-10/12 text-bodyText">
            Root canal treatment (endodontics) is a dental procedure used to
            treat infection at the centre of a tooth.
          </p>
          <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img alt='' src="/icons/Group 1171274941.svg" />
          </span>
        </div>
        <div className="bg-white flex flex-col justify-center items-center text-center lg:h-56 gap-2 pt-5 pb-5 rounded-md">
          <span
            className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full"
          >
            <img alt='' src="/icons/smile 1.svg" className="h-8 w-8" />
          </span>
          <h1 className="text-darkBlue">Cosmetic Dentist</h1>
          <p className="break-words lg:w-10/12 text-bodyText">
            Cosmetic dentistry is the branch of dentistry that focuses on
            improving the appearance of your smile.
          </p>
          <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img alt='' src="/icons/Group 1171274941.svg" />
          </span>
        </div>
        <div className="bg-white flex flex-col justify-center items-center text-center lg:h-56 gap-2 pt-5 pb-5 rounded-md">
          <span
            className="bg-skyBlue w-12 h-12 flex justify-center
           items-center rounded-full"
          >
            <img alt='' src="/icons/implant 1.svg" className="h-8 w-8" />
          </span>
          <h1 className="text-darkBlue">Dental Implants</h1>
          <p className="break-words lg:w-10/12 text-bodyText">
            A dental implant is an artificial tooth root thats placed into your
            jaw to hold a prosthetic tooth or bridge.
          </p>
          <span className="flex justify-center items-center gap-2 text-darkBlue">
            <p className="flex gap-2 border-b ">learn more </p>
            <img alt='' src="/icons/Group 1171274941.svg" />
          </span>
        </div>
      </section>

      <section
        className="md:hidden bg-lightBlue mt-96
     "
      >
        <Treatment />
      </section>

      {/* Other sections */}
      <section className="">
        <PatientDiv />
      </section>

      {/* Footer */}
      <section className="mb-10 mt-20">
        <Footer />
      </section>
    </main>
  );
}

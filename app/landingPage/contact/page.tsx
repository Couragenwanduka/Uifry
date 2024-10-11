'use client';
import NavBar from '@/app/component/nav/navBar';
import BodyText from '@/app/component/text/Bodytext';
import Headertext from '@/app/component/text/Headertext';
import Footer from '@/app/component/Footer/footer';
import React from 'react';
import dynamic from 'next/dynamic';
import ContactDiv from '@/app/component/div/contactDiv';

// Dynamically import MyMapWithCustomIcon to prevent SSR issues
const MyMapWithCustomIcon = dynamic(() => import('./map'), { ssr: false });

export default function Contact() {
  return (
    <main className="font-sans w-full overflow-hidden h-full bg-white">
      <NavBar className="bg-lightBlue border-b md:border-none border-midBlue" />

      {/* Header and introductory text */}
      <article className="flex flex-col md:justify-center md:items-center mt-40 md:mt-0 p-5 md:p-0">
        <Headertext
          className="md:text-center text-6xl font-bold"
          content="Get in touch"
        />
        <BodyText content="Book an Appointment to treat your teeth right now." />
      </article>

      {/* Main content layout */}
      <section className="flex flex-col-reverse lg:flex-row w-full md:p-10 p-5 gap-3">
        {/* Left section with map and contact details */}
        <section className="lg:w-[50%] flex flex-col gap-3">
          <div className="border-2 border-skyBlue rounded-md">
            <MyMapWithCustomIcon />
          </div>
          <div className="flex flex-col gap-3">
            <ContactDiv
              image="/icons/officeTIme.svg"
              headerText="Office Timings"
              bodyText="Monday - Saturday (9:00am to 5pm)"
              close="Sunday (Closed)"
            />
            <ContactDiv
              image="/icons/address.svg"
              headerText="Email Address"
              bodyText="courageobunike@gmail.com"
            />
            <ContactDiv
              image="/icons/telephone.svg"
              headerText="Phone Number"
              bodyText="0900-78601"
            />
            <ContactDiv
              image="/icons/chat.svg"
              headerText="Live chat"
              bodyText="+1-2064512559"
            />
          </div>
        </section>

        {/* Right section with the contact form */}
        <section className="border border-skyBlue lg:w-[50%] rounded-md ">
          <form className="flex flex-col text-bodyText w-full p-10 gap-4">
            <section className="flex gap-2 ">
              <div className="flex flex-col text-xl w-[50%] gap-4">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="border text-lg w-full h-14 p-3 rounded-md focus:outline-none"
                />
              </div>
              <div className="flex flex-col text-xl w-[50%] gap-4">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="border text-lg w-full h-14 p-3 rounded-md focus:outline-none"
                />
              </div>
            </section>
            <label>Email</label>
            <input
              type="email"
              placeholder="Email"
              className="border text-lg w-full h-14 p-3 rounded-md focus:outline-none"
            />
            <label>Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number +1 (555) 000-0000"
              className="border text-lg w-full h-14 p-3 rounded-md focus:outline-none"
            />
            <label>Select Date</label>
            <input
              type="date"
              className="border text-lg w-full h-14 p-3 rounded-md focus:outline-none"
            />
            <label>Message</label>
            <textarea
              placeholder="Message"
              className="h-52 border p-5 resize-none"
            />
            <div className="flex justify-center items-center">
              <button type="submit" className="bg-midBlue w-40 h-10 rounded-md text-white">
                Book Appointment
              </button>
            </div>
          </form>
        </section>
      </section>

      {/* Footer */}
      <section className="mb-10 mt-20">
        <Footer />
      </section>
    </main>
  );
}

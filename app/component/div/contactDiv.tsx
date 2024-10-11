/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';

interface Props {
  image: string;
  headerText: string;
  bodyText: string;
  close?: string;
}

const ContactDiv: FC<Props> = ({ image, headerText, bodyText, close }) => {
  return (
    <main>
      <section
        style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)' }}
        className="h-28 rounded-md flex items-center"
      >
        <img src={image} alt="Section Image" className="md:w-40 w-20 " />
        <div className="flex flex-col gap-1">
          <h1 className="md:text-3xl text-darkBlue font-bold">{headerText}</h1>
          <p className="md:text-lg text-sm text-pretty text-black text-opacity-50">
            {bodyText}
          </p>
          {close && (
            <button className=" w-40 text-start text-sm md:text-base h-1 mb-2 text-black text-opacity-50">
              {close}
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default ContactDiv;

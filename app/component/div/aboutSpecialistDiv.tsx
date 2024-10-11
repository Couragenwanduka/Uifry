import React, { FC } from 'react';
import BodyText from '../text/Bodytext';
import Link from 'next/link';

interface Props {
  className?: string;
  image: string;
  text: string;
  name: string;
  specility: string;
  link: string;
}

const AboutSpecialistDiv: FC<Props> = ({
  className,
  image,
  text,
  name,
  specility,
  link,
}) => {
  return (
    <main>
      <section
        className={`${className} lg:h-80 flex flex-col lg:flex-row gap-6  border-b md:w-[95%] border-midBlue border-opacity-50 bg-lightBlue p-5 lg:p-0 rounded-md lg:rounded-none`}
      >
        <img src={image} className="w-[19rem] h-[19rem]" />
        <article className="flex flex-col  gap-3 md:pt-10">
          <div className="flex  flex-col md:flex-row  text-darkBlue font-sans gap-3 items-center">
            <h1 className="text-2xl font-bold">{name}</h1>
            <h2>{specility}</h2>
          </div>
          <BodyText className="break-words lg:w-9/12" content={text} />
          <Link href={link} passHref>
            <button className="bg-midBlue w-40 h-10 text-white rounded-md">
              Book Appointment
            </button>
          </Link>
        </article>
      </section>
    </main>
  );
};

export default AboutSpecialistDiv;

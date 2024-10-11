/* eslint-disable @next/next/no-img-element */
import React, { FC } from 'react';

interface Props {
  className?: string;
  image: string;
  text: string;
  author: string;
  title: string;
  description: string;
}

const ArticleDiv: FC<Props> = ({
  className,
  image,
  text,
  author,
  title,
  description,
}) => {
  return (
    <main>
      <section
        className={`${className} font-sans bg-lightBlue lg:w-[18rem] h-[28rem] flex flex-col justify-center  items-center rounded-md gap-4 mt-5 md:mt-0`}
      >
        <img src={image} className=""  alt=''/>
        <div className="flex gap-16  items-center">
          <button className="text-white bg-darkBlue w-24 h-10 rounded-md">
            {text}
          </button>
          <h1 className="text-darkBlue">{author}</h1>
        </div>
        <p className="text-darkBlue -ml-32">{title}</p>
        <p className="text-darkBlue  text-opacity-40 text-sm">{description}</p>
      </section>
    </main>
  );
};

export default ArticleDiv;

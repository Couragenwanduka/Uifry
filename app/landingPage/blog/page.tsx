/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @next/next/no-img-element */

'use client';
import NavBar from '@/app/component/nav/navBar';
import BodyText from '@/app/component/text/Bodytext';
import Headertext from '@/app/component/text/Headertext';
import Footer from '@/app/component/Footer/footer';
import React from 'react';
import { BlogDiv } from '@/app/component/div/BlogDiv';
import ArticleDiv from '@/app/component/div/ArticleDiv';
import { SpecialistDiv } from '@/app/component/div/SpecialistDiv';
import PatientDiv from '@/app/component/div/patientDiv';
import DentalDiv from '@/app/component/div/DentalDiv';

export default function Blog() {
  return (
    <main className="font-sans w-full overflow-hidden h-full bg-white">
      <NavBar className="bg-lightBlue border-b md:border-none border-midBlue" />

      {/* Home page content */}
      <article className="flex flex-col md:justify-center md:items-center mt-40 md:mt-0 p-5 md:p-0">
        <Headertext className="md:text-center" content="Blogs" />
        <BodyText
          className="md:text-center break-words lg:w-5/12 mt-2"
          content="We use only the best quality materials on the market in order to provide the best products to our patients."
        />
        <span className="flex w-80 h-10 gap-2 p-2 justify-center items-center border border-midBlue rounded-md mt-3">
          <img src="/icons/search.svg" alt="search icon" />
          <input
            type="text"
            placeholder="Search"
            className="w-full h-full bg-transparent focus:outline-none text-darkBlue"
          />
        </span>
      </article>

      {/* Blog section */}
      <section>
        <div className="flex w-full gap-4 justify-center mt-10 p-10">
          <BlogDiv
            image="/assets/Rectangle 652.png"
            text="Self Care"
            author="Anita Jackson"
            title="Care of your Teeth"
            description="Lorem ipsum dolor sit amet consectetur."
          />
          <BlogDiv
            image="/assets/Rectangle 652 (2).png"
            text="Self Care"
            author="Anita Jackson"
            title="Care of your Teeth"
            description="Lorem ipsum dolor sit amet consectetur."
          />
          <BlogDiv
            image="/assets/Rectangle 652 (2).png"
            text="Self Care"
            author="Anita Jackson"
            title="Care of your Teeth"
            description="Lorem ipsum dolor sit amet consectetur."
            className="md:hidden lg:block"
          />
        </div>
      </section>

      {/* Article section */}
      <section>
        <div className="flex w-full justify-between md:p-10 p-5 mt-10">
          <h1 className="text-darkBlue text-3xl font-sans font-semibold">
            Article
          </h1>
          <span className="flex w-32 h-10 gap-2 text-sm rounded-md border justify-center items-center text-darkBlue">
            Sort by: New
            <img
              src="/icons/arrowHead.svg"
              className="w-5 h-5"
              alt="sort icon"
            />
          </span>
        </div>
        <div className="md:grid  md:grid-cols-2 lg:grid-cols-4 grid-flow-row gap-4 md:p-10 p-5">
          <ArticleDiv
            image="/assets/Rectangle 652 (3).png"
            text="Self Care"
            author="Anita Jackson"
            title="Care of your Teeth"
            description="Lorem ipsum dolor sit amet consectetur."
          />
          <ArticleDiv
            image="/assets/Rectangle 652 (4).png"
            text="Self Care"
            author="Anita Jackson"
            title="Care of your Teeth"
            description="Lorem ipsum dolor sit amet consectetur."
          />
          <ArticleDiv
            image="/assets/Rectangle 652 (3).png"
            text="Self Care"
            author="Anita Jackson"
            title="Care of your Teeth"
            description="Lorem ipsum dolor sit amet consectetur."
          />
          <ArticleDiv
            image="/assets/Rectangle 652 (4).png"
            text="Self Care"
            author="Anita Jackson"
            title="Care of your Teeth"
            description="Lorem ipsum dolor sit amet consectetur."
          />
          <ArticleDiv
            image="/assets/Rectangle 652 (6).png"
            text="Self Care"
            author="Anita Jackson"
            title="Care of your Teeth"
            description="Lorem ipsum dolor sit amet consectetur."
          />
          <ArticleDiv
            image="/assets/Rectangle 652 (5).png"
            text="Self Care"
            author="Anita Jackson"
            title="Care of your Teeth"
            description="Lorem ipsum dolor sit amet consectetur."
          />
          <ArticleDiv
            image="/assets/Rectangle 652 (6).png"
            text="Self Care"
            author="Anita Jackson"
            title="Care of your Teeth"
            description="Lorem ipsum dolor sit amet consectetur."
          />
          <ArticleDiv
            image="/assets/Rectangle 652 (5).png"
            text="Self Care"
            author="Anita Jackson"
            title="Care of your Teeth"
            description="Lorem ipsum dolor sit amet consectetur."
          />
        </div>
      </section>

      {/* Other sections */}
      <section>
        <PatientDiv />
      </section>
      <section>
        <SpecialistDiv />
      </section>
      <section className="md:mt-40 lg:mt-0">
        <DentalDiv />
      </section>

      {/* Footer */}
      <section className="mb-10 mt-20 md:mt-40">
        <Footer />
      </section>
    </main>
  );
}

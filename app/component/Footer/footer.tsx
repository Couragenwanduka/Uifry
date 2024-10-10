"use client";
import React, { FC, useState } from 'react';

const Footer = () => {
    const [active, setActive] = useState<string | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
        setActive(event.currentTarget.textContent);
    };
  return (
    <main className='h-32 flex flex-col justify-center items-center mt-10 '>
        <section className=' justify-between w-[93%] border-b border-darkBlue pb-5 hidden md:flex'>
                <div>
                    <img src={'/icons/Logo.svg'} alt="Logo" /> 
                </div>
                <nav>
                    <ul className="flex space-x-8 text-darkBlue cursor-pointer">
                        {['Home', 'Services', 'Blog', 'About', 'Contact'].map((item) => (
                            <li
                                key={item}
                                onClick={handleClick}
                                className={active === item ? 'te font-bold' : ''} // Highlight active item
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </nav>
        </section>
        <section className='md:flex hidden justify-between items-center w-[93%]  mt-10'>
            <div className='text-darkBlue'>
                <h1>All rights reserved ® uifry.com  | Terms and conditions apply!</h1>
            </div>
            <div>
                <img src='/assets/social.png'/>
            </div>
        </section>

        <section className='md:hidden font-sans flex flex-col gap-3 w-full p-5'>
            <div>
                <img src={'/icons/Logo.svg'} alt="Logo" /> 
            </div>
            <div>
                <h1 className='text-darkBlue'>All our PRO level features at your fingertips.</h1>
            </div>
            <div className='mt-5 gap-2 '>
                <h1 className='text-darkBlue'> follow us on</h1>
                <img src='/assets/social.png'/>
            </div>
        </section>
    </main>
  )
}

export default Footer

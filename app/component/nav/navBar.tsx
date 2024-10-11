'use client';
import React, { FC, useState } from 'react';
import Link from 'next/link';

interface Props {
  className?: string;
}

const NavBar: FC<Props> = ({ className }) => {
  const [active, setActive] = useState<string>(''); // Default active item
  const [isOpen, setIsOpen] = useState<boolean>(false); // State for mobile menu

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (item: string) => {
    setActive(item); // Set the active item
    setIsOpen(false); // Close the mobile menu on click
  };

  interface Paths {
    [key: string]: string;
  }

  const paths: Paths = {
    Home: '/',
    Services: '/landingPage/service',
    Blog: '/landingPage/blog',
    About: '/landingPage/about',
    Contact: '/landingPage/contact',
  };

  return (
    <main className="w-full md:h-40 h-scree flex justify-center items-center font-sans md:p-10">
      {/* Desktop Navigation */}
      <section
        className={`${className} w-full h-20 max-w-screen-xl full-hd:max-w-screen-2xl justify-between items-center rounded-md p-5 hidden md:flex`}
      >
        <div>
          <img src={'/icons/Logo.svg'} alt="Logo" />
        </div>
        <nav>
          <ul className="flex space-x-8 text-darkBlue cursor-pointer">
            {Object.keys(paths).map(item => (
              <li
                key={item}
                className={active === item ? 'font-bold' : ''}
                onClick={() => handleClick(item)} // Set active on click
              >
                <Link href={paths[item]} passHref>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Link href={'/landingPage/contact'}>
            <button className="px-4 py-2 bg-midBlue text-white rounded-md">
              Book Now
            </button>
          </Link>
        </div>
      </section>

      {/* Mobile Navigation */}
      <section className={`md:hidden w-full fixed z-50 mt-20 ${className}`}>
        <div className="flex justify-between items-center pl-5 pr-5 pt-5 h-28">
          <div>
            <img src={'/icons/Logo.svg'} alt="Logo" />
          </div>
          <div onClick={handleToggleMenu}>
            <img src="/icons/Button 3.svg" alt="Menu Icon" />
          </div>
        </div>

        {isOpen && (
          <nav className=" bg-white absolute w-full overflow-hidden p-5">
            <ul className="flex flex-col space-y-4 text-darkBlue cursor-pointer pb-10">
              {Object.keys(paths).map(item => (
                <li
                  key={item}
                  className={
                    active === item
                      ? 'text-darkBlue font-bold'
                      : 'border-b border-gray border-opacity-40'
                  }
                  onClick={() => handleClick(item)} // Set active on click
                >
                  <Link href={paths[item]}>{item}</Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </section>
    </main>
  );
};

export default NavBar;

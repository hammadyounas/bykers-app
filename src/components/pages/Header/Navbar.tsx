'use client';

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="fixed left-0 top-0 z-50 w-full bg-white px-5 lg:px-10">
        <div className="container flex w-full items-center justify-between">
          {/* Left Side */}
          <div className="flex w-[60%] items-center max-xl:w-[85%] sm:mx-auto sm:justify-center xl:w-[60%]">
            {/* Logo */}
            <div className={`${menu ? 'hidden' : 'lg:block '}`}>
              <Link href="/" className="flex items-center">
                <img
                  src="/assets/Images/logo.png"
                  alt="Logo"
                  className="w-20 max-sm:w-12"
                />
                <h1 className=" text-xl font-semibold italic text-red-600">
                  Bikers
                </h1>
              </Link>
            </div>

            {/* Menu */}
            <div
              className={`w-full text-lg lg:pl-20 lg:text-base ${menu ? 'absolute inset-x-0 top-8 z-50 flex h-screen flex-col items-center justify-center bg-black text-white' : 'max-lg:hidden'}`}
            >
              <ul className="flex w-[100%] items-center text-center font-semibold max-lg:flex-col">
                {/* <li className='max-lg:py-2 max-lg:hover:bg-secondary lg:hover:text-secondary cursor-pointer text-center max-lg:hover:text-white max-lg:w-full rounded-md'>Home</li> */}
                <Link href="/">
                  <li className="flex cursor-pointer rounded-md max-lg:ml-2 max-lg:w-full max-lg:items-center max-lg:justify-center max-lg:py-2 max-lg:hover:bg-secondary max-lg:hover:text-white sm:mr-5 lg:hover:text-red-600">
                    Home
                  </li>
                </Link>
                <Link href="/#featured">
                  <li className="flex cursor-pointer rounded-md max-lg:ml-2 max-lg:w-full max-lg:items-center max-lg:justify-center max-lg:py-2 max-lg:hover:bg-secondary max-lg:hover:text-white sm:mr-5 lg:hover:text-red-600">
                    Featured Bike
                    {/* <img src="/assets/images/Header-img/chevron-down.png" alt="" className='w-6 h-6 lg:ml-2'/> */}
                  </li>
                </Link>
                <Link href="/#browse">
                  <li className="flex cursor-pointer rounded-md max-lg:ml-2 max-lg:w-full max-lg:items-center max-lg:justify-center max-lg:py-2 max-lg:hover:bg-secondary max-lg:hover:text-white sm:mr-5 lg:hover:text-red-600">
                    Browse By Type
                    {/* <img src="/assets/images/Header-img/chevron-down.png" alt="" className='w-6 h-6 lg:ml-2'/> */}
                  </li>
                </Link>
                <Link href="/sellBike">
                  <li className="flex cursor-pointer rounded-md max-lg:ml-2 max-lg:w-full max-lg:items-center max-lg:justify-center max-lg:py-2 max-lg:hover:bg-secondary max-lg:hover:text-white sm:mr-5 lg:hover:text-red-600">
                    Sell Your Bike
                  </li>
                </Link>

                <Link href="/admin/viewBikes">
                  <li className="flex cursor-pointer rounded-md max-lg:ml-2 max-lg:w-full max-lg:items-center max-lg:justify-center max-lg:py-2 max-lg:hover:bg-secondary max-lg:hover:text-white sm:mr-5 lg:hover:text-red-600">
                    Admin
                  </li>
                </Link>
              </ul>
            </div>
          </div>

          {/* Hamburger Menu for Small Screens */}
          <div className="absolute right-5 ml-auto lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {menu ? (
                <FontAwesomeIcon
                  icon={faTimes}
                  className="mt-10 text-2xl text-white"
                />
              ) : (
                <FontAwesomeIcon icon={faBars} className="text-2xl" />
              )}
            </button>
          </div>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

import { MenuItemsConstant } from 'constant/AdminMenuItems';
import Image from 'next/image';
import React, { useState } from 'react';

export default function GridView({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='grid grid-cols-5'>
  <div
        className={`${
          isMenuOpen ? "col-span-5 block h-screen" : "hidden lg:block col-span-1 "
        } bg-white `}
      >
        <div className="flex justify-between items-center xl:mt-16 lg:mt-10 mt-16 px-4">
          <div className="flex items-center">
            <Image
              src="/assets/Images/logo.png"
              alt="Logo"
              className="max-lg:w-[30px] filter"
              width={80}
              height={70}
            />
            <div className="text-brown font-semibold ml-2 lg:text-xl text-sm text-red-600">
              <p>BYKERS</p>
            </div>
          </div>
        </div>
        <div className={`mt-10 w-full text-center lg:block ${isMenuOpen ? 'block' : 'hidden'}`}>
          {MenuItemsConstant.map((item, index) => (
            <div
              key={index}
              className='w-full flex py-5 items-center justify-center border-b border-secondary-light cursor-pointer hover:bg-secondary-light hover:text-white'
            >
              <i className={`fa-solid ${item.icon} pr-4 text-gray-700 text-xl `}></i>
              <p className='block sm:text-sm text-xs font-semibold hover:text-white'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden absolute z-50 flex justify-between items-center sm:m-2 text-2xl lg:mt-0 lg:ml-0 top-0 left-4">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} xl:text-2xl text-base`}></i>
            </button>
          </div>

      <div className='lg:col-span-4 col-span-5'>
        {children}
      </div>
    </div>
  );
}

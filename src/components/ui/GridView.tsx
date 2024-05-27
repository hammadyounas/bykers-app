import { MenuItemsConstant } from 'constant/AdminMenuItems';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function GridView({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex">
      <div
        className={`${
          isMenuOpen ? 'block h-screen' : 'hidden lg:block z-10'
        } bg-white w-full lg:w-[20%] shadow-md`}
      >
        <div className="flex justify-center items-center xl:mt-16 lg:mt-10 mt-16 px-4">
          <Link href="/">
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
          </Link>
        </div>
        <div className={`mt-10 w-full text-center ${isMenuOpen ? 'block' : 'hidden lg:block'}`}>
          {MenuItemsConstant.map((item, index) => (
            <Link href={item.link} key={index}>
              <div
                className={`w-full flex py-5 items-center justify-center border-b border-secondary-light cursor-pointer hover:bg-slate-100 hover:text-gray-800 ${
                  router.pathname === item.link ? 'bg-secondary-light text-white' : ''
                }`}
              >
                <i
                  className={`fa-solid ${item.icon} pr-4 text-gray-700 text-xl ${
                    router.pathname === item.link ? ' text-white' : ''
                  }`}
                ></i>
                <p className="block sm:text-sm text-xs font-semibold">{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="lg:hidden absolute z-50 flex justify-between items-center sm:m-2 text-2xl lg:mt-0 lg:ml-0 top-0 left-4">
        <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
          <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} xl:text-2xl text-base`}></i>
        </button>
      </div>

      <div className="flex-1 h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}

import Link from 'next/link';
import React from 'react';

export default function Login() {
  return (
    <section className="lg:h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between bg-black">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="/assets/images/bike13.jpg"
              className="w-full"
              alt="Sample image"
            />
          </div>
          <div className="mb-12 w-[90%] md:w-8/12 lg:w-5/12 xl:w-5/12 max-lg:mx-auto">
            <form>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 lg:text-2xl sm:text-xl text-lg font-bold text-red-700">Sign In</p>
              </div>
              <div className="mb-6 mt-5">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="email">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  className="shadow appearance-none border rounded w-full sm:w-[90%] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Email address"
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="shadow appearance-none border rounded w-full sm:w-[90%] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Password"
                />
              </div>
              <div className="mb-6 flex items-center justify-between">
                
                <a href="#!" className="inline-block align-baseline font-bold text-sm hover:text-red-500 text-white">
                  Forgot password?
                </a>
              </div>
              <div className="text-center lg:text-left">
                <Link href={'/admin/viewBikes'}>
                <button type="button" className="inline-block rounded bg-red-700 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow transition duration-150 ease-in-out hover:bg-white focus:bg-red hover:text-red-700 focus:outline-none active:bg-red-700">
                  Login
                </button>
                </Link>
                {/* <p className="mb-0 mt-2 pt-1 text-sm font-semibold text-white">
                  Don't have an account ? {" "}
                  <a href="#!" className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700">
                     Register
                  </a>
                </p> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

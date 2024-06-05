import React from 'react';

export default function BikeDetailSection({ price }: { price: string }) {
  return (
    <div className="max-sm:mx- p-2 max-lg:p-10 max-sm:p-3 lg:w-[30%] xl:w-[25%]">
      {/* price and contact detail section */}
      <div className="w-full bg-white py-3">
        <div className=" border-b p-2">
          <h1 className="text-center font-semibold text-red-600 sm:text-xl lg:text-2xl">
            {`Price ${price}` || 'Price $10000'}
          </h1>
        </div>
        <div className="m-5 flex items-center justify-center bg-secondary-light p-2 text-center text-white">
          <div className="mr-3">
            <i className="fa-solid fa-phone text-2xl"></i>
          </div>
          <div>
            <h3 className="text-lg font-semibold">021-12345670</h3>
            <p className="text-xs">Show Phone Number</p>
          </div>
        </div>
        <div className="m-5 flex items-center justify-center rounded-md border-2 border-red-600 py-3 text-center text-red-600">
          <i className="fa-solid fa-envelope mr-3 text-2xl"></i>
          <h3 className="text-lg font-semibold">Send Message</h3>
        </div>
      </div>

      {/* seller details */}
      <div className="mt-10 w-full bg-white py-3">
        <div className="border-b p-2 text-center lg:text-lg">
          <h2>Seller Details</h2>
        </div>
        <div className="m-5 flex items-center justify-center rounded-md py-1 text-xs lg:text-sm">
          <div className="mr-3">
            <i className="fa-solid fa-user bg-slate-300 p-3 text-2xl text-white"></i>
          </div>
          <div>
            <h3 className=" font-semibold text-red-600">John</h3>
            <p className="">Member Since Jul 12, 2020</p>
          </div>
        </div>

        <div className="mx-auto flex w-[50%] justify-around lg:w-[60%]">
          <i className="fa-solid fa-mobile-retro rounded-full bg-secondary-light px-3 py-2 text-xl text-white"></i>
          <i className="fa-solid fa-envelope rounded-full bg-secondary-light p-2 text-xl text-white"></i>
          <i className="fa-brands fa-facebook-f rounded-full bg-secondary-light px-3 py-2 text-xl text-white"></i>
        </div>
        <div className="m-5 rounded-md py-1 text-center text-xs lg:text-sm">
          <p className="">See if your friends know this seller</p>
          <h3 className=" font-semibold text-red-600">Connect with facebook</h3>
        </div>
      </div>

      {/* sefty tips  */}
      <div className="mx-auto mt-10 w-full bg-white py-3">
        <h2 className="border-b p-2 text-center font-semibold text-red-600 lg:text-lg">
          Safety tips for transaction
        </h2>
        <ol className="text-xs max-lg:text-center sm:text-sm lg:ml-10">
          <li>1. Use a safe location to meet seller</li>
          <li>2. Avoid cash transactions</li>
          <li>3. Beware of unrealistic offers</li>
        </ol>
        <div className="mr-5 mt-2 flex justify-end text-xs text-red-600 sm:text-sm lg:text-base">
          <p>Learn More</p>
        </div>
      </div>

      {/* Notify Section */}
      <div className="mx-auto mt-10 w-full py-3">
        <div className="rounded-md border border-red-600 py-1 text-center text-red-600">
          <button className="text-xs font-semibold sm:text-sm">
            <i className="fa-solid fa-circle-check mr-2"></i>Notify As Sold
          </button>
        </div>
        <div className="mt-3 rounded-md border border-red-600 py-1 text-center text-red-600">
          <button className="text-xs font-semibold sm:text-sm">
            <i className="fa-solid fa-flag mr-2"></i>Report This Ad
          </button>
        </div>
      </div>
    </div>
  );
}

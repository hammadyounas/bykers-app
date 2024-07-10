import Link from "next/link";
import React from "react";

export default function Blog() {
    
  return (
    <div className="w-full min-h-screen pt-20 max-sm:pt-16">
      <section className="dark:bg-white to-red-600  dark:text-gray-800">
        <div className=" w-full mx-auto space-y-6 sm:space-y-12">
          <div className="bg-black">
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-6xl text-red-700 text-center">
              Blogs
            </h1>
            <Link
              rel="noopener noreferrer"
              href="#"
              className="block text-white lg:mt-10 mt-5 max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-red-700"
            >
              {/* <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" /> */}
              <img
                src="/assets/Images/bike13.jpg"
                alt=""
                className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <div className="flex justify-between">
                <h3 className="text-2xl font-semibold  sm:text-4xl group-hover:underline group-focus:underline text-black">
                  Noster tincidunt reprimique ad pro
                </h3>
               
                </div>
                <span className="text-xs dark:text-gray-50">
                  February 19, 2021
                </span>
                <p>
                  Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                  in graece fuisset, eos affert putent doctus id.
                </p>
              </div>
            </Link>
          </div>

          {/* search bar */}
          <div>
            <form className="flex justify-end items-center lg:mx-10 mx-2">
                <label htmlFor="Search" className="px-6 bg-red-700 sm:py-3 py-2 text-white border font-bold shadow-lg"> Search</label>
                <input type="search" name="Search" className="md:w-[25%] w-[90%] sm:py-3 py-2 px-4 border border-gray-400 rounded shadow-lg caret-red-600"/>
            </form>
          </div>

          {/* article section */}
          <div>
            <h2 className="text-xl font-bold sm:text-2xl lg:text-4xl text-red-700 text-center">
              Arti<span className="text-black">cles</span>
            </h2>
            <div className="container lg:w-[80%] w-[90%] mx-auto grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-white lg:mt-10 mt-5">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="/assets/Images/bike9.jpg"
                />
                <div className="p-6 space-y-2">
                    <div className="flex justify-between">
                  <h3 className="sm:text-2xl text-lg text-red-600 font-semibold hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <i className="fa-regular fa-thumbs-up text-red-600 text-xl mt-2 items-center"></i>
                    </div>
                  <span className="text-xs dark:text-gray-600">
                    January 21, 2021
                  </span>
                  <p className="max-sm:text-sm">
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                  <Link href="#" className=" text-red-600 underline py-4 max-sm:text-sm">Open</Link>
                </div>
              </Link>

              <Link
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="/assets/Images/bike10.jpg"
                />
                <div className="p-6 space-y-2">
                <div className="flex justify-between">
                  <h3 className="sm:text-2xl text-lg text-red-600 font-semibold hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <i className="fa-regular fa-thumbs-up text-red-600 text-xl mt-2 items-center"></i>
                    </div>
                  <span className="text-xs dark:text-gray-600">
                    January 22, 2021
                  </span>
                  <p className="max-sm:text-sm">
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                  <Link href="#" className=" text-red-600 underline py-4 max-sm:text-sm">Open</Link>
                </div>
              </Link>

              <Link
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="/assets/Images/bike11.jpg"
                />
                <div className="p-6 space-y-2">
                <div className="flex justify-between">
                  <h3 className="sm:text-2xl text-lg text-red-600 font-semibold hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <i className="fa-regular fa-thumbs-up text-red-600 text-xl mt-2 items-center"></i>
                    </div>
                  <span className="text-xs dark:text-gray-600">
                    January 23, 2021
                  </span>
                  <p className="max-sm:text-sm">
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                  <Link href="#" className=" text-red-600 underline py-4 max-sm:text-sm">Open</Link>
                </div>
              </Link>
            </div>
          </div>

          {/* tips and maintenance section */}
          <div>
            <h2 className="text-xl font-bold sm:text-2xl lg:text-4xl text-red-700 text-center mt-10">
              Bike Maintenance <span className="text-black">Tips & Guidance</span>
            </h2>
            <div className="container lg:w-[80%] w-[90%] mx-auto grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 bg-white lg:mt-10 mt-5">
              <Link
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="/assets/Images/bike12.jpg"
                />
                <div className="p-6 space-y-2">
                <div className="flex justify-between">
                  <h3 className="sm:text-2xl text-lg text-red-600 font-semibold hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <i className="fa-regular fa-thumbs-up text-red-600 text-xl mt-2 items-center"></i>
                    </div>
                  <span className="text-xs dark:text-gray-600">
                    January 21, 2021
                  </span>
                  <p className="max-sm:text-sm">
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                  <Link href="#" className=" text-red-600 underline py-4 max-sm:text-sm">Open</Link>
                </div>
              </Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="/assets/Images/bike14.jpg"
                />
                <div className="p-6 space-y-2">
                <div className="flex justify-between">
                  <h3 className="sm:text-2xl text-lg text-red-600 font-semibold hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <i className="fa-regular fa-thumbs-up text-red-600 text-xl mt-2 items-center"></i>
                    </div>
                  <span className="text-xs dark:text-gray-600">
                    January 22, 2021
                  </span>
                  <p className="max-sm:text-sm">
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                  <Link href="#" className=" text-red-600 underline py-4 max-sm:text-sm">Open</Link>
                </div>
              </Link>
              <Link
                rel="noopener noreferrer"
                href="#"
                className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
              >
                <img
                  role="presentation"
                  className="object-cover w-full rounded h-44 dark:bg-gray-500"
                  src="/assets/Images/bike13.jpg"
                />
                <div className="p-6 space-y-2">
                <div className="flex justify-between">
                  <h3 className="sm:text-2xl text-lg text-red-600 font-semibold hover:underline group-focus:underline">
                    In usu laoreet repudiare legendos
                  </h3>
                  <i className="fa-regular fa-thumbs-up text-red-600 text-xl mt-2 items-center"></i>
                    </div>
                  <span className="text-xs dark:text-gray-600">
                    January 23, 2021
                  </span>
                  <p className="max-sm:text-sm">
                    Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                    neglegentur, ex has tantas percipit perfecto. At per tempor
                    albucius perfecto, ei probatus consulatu patrioque mea, ei
                    vocent delicata indoctum pri.
                  </p>
                  <Link href="#" className=" text-red-600 underline py-4 max-sm:text-sm">Open</Link>
                </div>
              </Link>
            </div>
          </div>
          {/* <div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600">Load more posts...</button>
		</div> */}
        </div>
      </section>
    </div>
  );
}

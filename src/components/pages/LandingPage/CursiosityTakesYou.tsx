import Image from "next/image";
import React from "react";

export default function CursiosityTakesYou() {
  return (
    <div
      className="sm:h-[70vh]"
      style={{
        backgroundImage: "url('/assets/Images/bg2.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="flex size-full items-center justify-between  px-5 max-md:flex-col max-sm:pt-16 sm:px-10 lg:px-20"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <div className="max-sm:-pt-10 md:w-[50%]">
          <Image
            src="/assets/Images/bike4.png"
            alt="bike1"
            width={600}
            height={700}
            className="shadow-md"
          />
        </div>

        <div className="text-white md:w-[50%]">
          <h1 className="mt-3 text-xl font-bold sm:text-2xl lg:text-4xl">
            Go as Curiosity Takes You
          </h1>
          <p className="text-xs sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quasinumquam quae.
            {/* <span className="text-red-600"> Start Your Journey Now!</span> */}
          </p>
          <h1 className="mt-5 text-sm font-semibold italic text-red-600 max-sm:pb-10 sm:text-lg lg:text-xl">
            VIEW DETAILS
          </h1>
        </div>
      </div>
    </div>
  );
}

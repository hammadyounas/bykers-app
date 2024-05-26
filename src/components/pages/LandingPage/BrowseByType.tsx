"use client";

import {
  newBikeConstant,
  oldBikeConstant,
  bikeTypeConstant,
} from "constant/OldAndNewBikesConstant";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function BrowseByType() {
  const [selectedCategory, setSelectedCategory] = useState("New Bike"); // Initial state
  const [activeLink, setActiveLink] = useState(bikeTypeConstant[0]?.title);
  const router = useRouter();

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setActiveLink(category);
  };

  const getCardsForCategory = (category: string) => {
    switch (category) {
      case "New Bike":
        return newBikeConstant;
      case "Old Bike":
        return oldBikeConstant;
      default:
        return [];
    }
  };

  const currentCards = getCardsForCategory(selectedCategory);

  const handleImageClick = (alt: string) => {
    const bike = currentCards.find((item) => item.alt === alt);
    if (bike) {
      router.push(
        `/bikeDetails?alt=${encodeURIComponent(alt)}`,
        `/bikeDetails?alt=${encodeURIComponent(alt)}`,
        { shallow: true }
      );
    }
  };

  return (
    <div id="browse" className={"max-sm:mt-10 sm:m-20"}>
      <h1
        className={
          "text-center text-2xl font-bold text-red-600 sm:text-3xl lg:text-5xl"
        }
      >
        Browse By<span className={"text-black"}> Type</span>
      </h1>

      <section
        className={
          "mx-auto mt-10 flex w-[100%] justify-around items-center text-center md:w-[30%]"
        }
      >
        {bikeTypeConstant.map((item, index) => (
          <div key={index} className={"flex text-xs sm:text-sm lg:text-base"}>
            <a
              className={`cursor-pointer font-semibold ${
                activeLink === item.title
                  ? "text-white bg-secondary-light px-6 py-2"
                  : ""
              }`}
              onClick={() => handleCategoryClick(item.title)}
            >
              {item.title}
            </a>
          </div>
        ))}
      </section>

      <div
        className={"grid grid-cols-1 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 "}
      >
        {currentCards.map(
          (
            item,
            index // Updated to render cards based on selected category
          ) => (
            <div
              key={index}
              className={
                "mt-10 flex cursor-pointer items-center justify-center"
              }
              onClick={() => handleImageClick(item.alt)}
            >
              <div>
                <div
                  className={``}
                  style={{
                    overflowY: item.alt === "New Bike" ? "auto" : "hidden",
                  }}
                >
                  <Image
                    src={item.src[0]}
                    alt={item.alt}
                    width={150}
                    height={100}
                    className=" w-[150px] xl:h-[180px]  xl:w-[300px]"
                  />
                  {/* Add overlay for hover effect */}
                  {/* {item.alt === 'Sports Biks' && (
                  <div className={styles.overlay}>
                    <h3>SCROLL</h3>
                  </div>
                )} */}
                </div>
                <div className={"text-center font-bold"}>
                  <h2>{item.title}</h2>
                  <p className="text-red-600">{item.price}</p>
                  {""}
                  {/* Add description property to Bike interface */}
                </div>
                {/* <a href="#" className={''}>
                  View
                </a> */}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

'use client';

interface Bike {
  _id: string;
  name: string;
  images: string[];
  selling_price: string;
  condition: string;
  [key: string]: any;
}

import {
  bikeTypeConstant,
} from 'constant/OldAndNewBikesConstant';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function BrowseByType() {
  const [selectedCategory, setSelectedCategory] = useState('New Bike'); // Initial state
  const [activeLink, setActiveLink] = useState(bikeTypeConstant[0]?.title);
  const [bikes, setBikes] = useState<Bike[]>([]);
      const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBikes = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bikes`, {
          params: {
            page: 1,
            limit: 10,
          },
        });
        const fetchedBikes = response.data.bikes;

        // Fetch images for each bike
        const bikesWithImages = await Promise.all(
          fetchedBikes.map(async (bike: Bike) => {
            const images = await Promise.all(
              bike.images.map(async (imageId: string) => {
                const imageResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/image/${imageId}`, {
                  responseType: 'blob',
                });
                return URL.createObjectURL(imageResponse.data);
              })
            );
            return { ...bike, images };
          })
        );

        setBikes(bikesWithImages);
      } catch (error) {
        console.error('Error fetching bikes:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBikes();
  }, [selectedCategory]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    );
  }
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setActiveLink(category);
  };

  const filterBikesByCondition = (condition: string) => {
    return bikes.filter(bike => bike.condition === condition);
  };

  const filteredBikes = selectedCategory === 'New Bike' ? filterBikesByCondition('New') : filterBikesByCondition('Used');


  return (
    <div id="browse" className={'max-sm:mt-10 sm:m-20'}>
      <h1
        className={
          'text-center text-2xl font-bold text-red-600 sm:text-3xl lg:text-5xl'
        }
      >
        Browse By<span className={'text-black'}> Type</span>
      </h1>

      <section
        className={
          'mx-auto mt-10 flex w-[100%] justify-around items-center text-center md:w-[30%]'
        }
      >
        {bikeTypeConstant.map((item, index) => (
          <div key={index} className={'flex text-xs sm:text-sm lg:text-base'}>
            <a
              className={`cursor-pointer font-semibold  px-6 py-2 ${
                activeLink === item.title
                  ? 'text-white bg-secondary-light px-6 py-2'
                  : ''
              }`}
              onClick={() => handleCategoryClick(item.title)}
            >
              {item.title}
            </a>
          </div>
        ))}
      </section>

      <div
        className={'grid grid-cols-1 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 '}
      >
        {filteredBikes.length === 0 && (
          <div className={'text-center text-lg font-bold text-red-600'}>
            currently no bike available for sale.
          </div>
        ) }
        {filteredBikes.map((bike, index) => (
          <div
            key={index}
            className={
              'mt-10 flex cursor-pointer items-center justify-center'
            }
          >
            <Link href={`/bikeDetails/${bike._id}`}>
                <div>
                  <div
                    style={{
                      overflowY: bike.condition === 'New' ? 'auto' : 'hidden',
                    }}
                  >
                    {bike.images[0] && (
                      <Image
                        src={bike.images[0]}
                        alt={bike.name || 'Bike Image'}
                        width={150}
                        height={100}
                        className="w-[150px] xl:h-[180px] xl:w-[300px]"
                      />
                    )}
                  </div>
                  <div className="text-center font-bold">
                    <h2>{bike.title}</h2>
                    <p className="text-red-600">$ {bike.selling_price}</p>
                  </div>
                </div>
              
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

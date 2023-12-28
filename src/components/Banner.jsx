import React from "react";
import TravelImg from "../assets/TravelImg.png";
import { MdFlightTakeoff, MdLocalHotel } from "react-icons/md";
import { IoFastFood } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="min-h-[550px] bg-gray-200">
      <div className="min-h-[550px] flex justify-center items-center backdrop-blue-xl py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            {/* image section */}
            <div>
              <img
                data-aos="flip-up"
                src={TravelImg}
                alt=""
                className="max-w-[450px] h-[350px] w-full mx-auto drop-shadow-[5px_5px_12px_rgba(0,0,0,0.7)] object-cover"
              />
            </div>
            {/* text section */}
            <div>
              <h1 data-aos="fade-up" className="tex-3xl font-bold sm:text-4xl ">
                Explore all corners of the world with us
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-7"
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis
                omnis architecto cupiditate minus fugit. Perferendis neque nam
                labore quas accusamus sed magnam! Quo excepturi esse accusantium
                quidem eaque accusamus ipsam.{" "}
              </p>
              <div data-aos="zoom-in" className="grid grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <MdFlightTakeoff className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                      <p>Flight</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <MdLocalHotel className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                      <p>Hotel</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <FaWifi className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                      <p>Wi-fi</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                      <p>Foods</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Banner;

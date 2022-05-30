import React, { useRef, useState } from "react";
import { SiCodechef } from "react-icons/si";
import { HiOutlineMail, HiOutlineAcademicCap } from "react-icons/hi";
import { BiBuildings, BiPhoneCall } from "react-icons/bi";
import {
  MdOutlineLocationOn,
  MdOutlineEngineering,
  MdOutlineModeEdit,
} from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
function ViewProfile() {
  return (
    <div className=" bg-gray-100 pb-5">
      <div className="m-auto  h-60 w-full rounded-b-2xl bg-red-400">
        <img
          src="img/profile_banner.jpg"
          alt="profile_banner"
          className=" h-60 w-full rounded-b-xl"
        />
      </div>
      <div className="relative z-40 mx-2">
        <div className="m-auto -mt-16 w-full rounded-xl  bg-white p-4 shadow-xl sm:w-2/3 md:w-1/2 ">
          <div className=" flex justify-center ">
            <div className=" -mt-20 mb-6 h-32 w-32   rounded-full border-3 border-white">
              <img
                src="img/Teams/saurabh.png"
                alt="ViewProfile"
                className=" rounded-full  object-cover "
              />
            </div>
          </div>
          <div className="text-center text-gray-700">
            <h3 className="bold font-sans text-xl text-gray-900">
              Saurabh Kumar
            </h3>
            <p className="mt-4 font-sans font-light ">
              Hello, i'm web developer!
            </p>
          </div>
          <div className=" space-y-2 pt-4 text-left text-lg text-gray-600 ">
            <a href="" className="flex items-center">
             
              <span className="px-2 text-2xl">
                <SiCodechef />
              </span>
              @ saurabh_9097
            </a>
            <a href="" className="flex items-center">
              <span className="px-2 text-2xl ">
                <HiOutlineMail />
              </span>
              hmsaurabhkr@gmail.com
            </a>
            <p className="flex items-center">
             
              <span className="px-2 text-2xl ">
                <BiBuildings />
              </span>
              Bengal College Of Engineering Technology
            </p>
            <a href="" className="flex items-center">
              <span className="px-2 text-2xl">
                <BiPhoneCall />
              </span>
              9097994880
            </a>
            <p className="flex items-center">
              <span className="px-2 text-2xl">
                <MdOutlineLocationOn />
              </span>
              Durgapur, West Bengal
            </p>
            <p className="flex items-center">
             
              <span className="px-2 text-2xl">
                <HiOutlineAcademicCap />
              </span>
              Computer Science Engineering
            </p>
            <p className=" flex  items-center pt-4 font-bold">
              <span className="px-2 text-2xl">
                <MdOutlineEngineering />
              </span>
              Skills
            </p>
            <div className="flex rounded-md border border-gray-300 p-4 ">
              <p className="">C++, C, ReactJs, Tailwind</p>
            </div>
          </div>
          <div className=" flex justify-end p-4 ">
            <a
              href="/create-profile"
              className="text-md flex  items-center justify-end rounded-lg bg-red-600 px-5 py-2.5 text-center font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300  sm:w-auto"
            >
              <span className="px-2 text-2xl ">
                <MdOutlineModeEdit />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;

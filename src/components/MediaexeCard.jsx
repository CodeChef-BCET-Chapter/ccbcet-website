import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
export default function MediaExe({mediaexe}) {
  return (
    <div className="">
      {/* CP Executive */}
      <div className=" my-10 w-72 h-56 rounded-lg bg-white p-10 shadow-xl ">
        <div className=" -mt-28 flex  justify-center ">
          <img
            src={mediaexe.imageUrl}
            alt=""
            className=" h-32 w-32 rounded-full border-2 border-orange-600 "
          />
        </div>
        <div className=" p-2 ">
          <h1 className="mb-1 text-center text-2xl font-bold">{mediaexe.name}</h1>
          <p className="text-center text-sm text-gray-800">
            {mediaexe.designation}
          </p>
        </div>
        <div className="flex justify-center gap-5 pt-5 text-xl text-gray-700   ">
          <BsInstagram className="hover:text-red-600" />
          <BsLinkedin className="hover:text-red-600" />
          <BsTwitter className="hover:text-red-600" />
          <BsGithub className="hover:text-red-600" />
        </div>
      </div>
    </div>
  );
}

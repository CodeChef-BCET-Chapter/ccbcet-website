import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
export default function Leads({ leads }) {
  return (
    <div className="">
      {/* Leads */}
      <div className=" my-10 h-56 w-72 rounded-lg bg-white p-10 shadow-xl ">
        <div className=" -mt-28 flex  justify-center ">
          <img
            src={leads.imageUrl}
            alt=""
            className=" h-32 w-32 rounded-full border-2 border-orange-600 object-cover "
          />
        </div>
        <div className=" p-2 ">
          <h1 className="mb-1 text-center text-2xl font-bold">
            {leads.name}
          </h1>
          <p className="text-center text-sm text-gray-800">
            {leads.designation}
          </p>
        </div>
        <div className="flex justify-center gap-5 pt-5 text-xl text-gray-700   ">
            <a href={leads.instagram} className="hover:text-red-600" target="_blank"><BsInstagram /></a>
            <a href={leads.linkedin}className="hover:text-red-600" target="_blank"><BsLinkedin /></a>
            <a href={leads.twitter} className="hover:text-red-600" target="_blank"><BsTwitter  /></a>
            <a href={leads.github}className="hover:text-red-600" target="_blank"> <BsGithub  /></a>     
        </div>
      </div>
    </div>
  );
}

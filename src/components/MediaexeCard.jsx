import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { IKImage } from "imagekitio-react";
const urlEndpoint = "https://ik.imagekit.io/botoixhvc";
export default function MediaExe({ mediaexe }) {
  return (
    <div className="">
      {/* CP Executive */}
      <div data-aos="fade-up" data-aos-duration="1000" className=" my-10 h-56 w-72 rounded-lg bg-white p-10 shadow-xl ">
        <div className="flex justify-center">
        <div className=" -mt-28  h-32 w-32  border-3 border-orange-600 rounded-full ">
          <IKImage
            src={mediaexe.imageUrl}
            alt={mediaexe.name}
            urlEndpoint={urlEndpoint}
            lqip={{ active: true }}
            loading="lazy"
            className="  rounded-full object-cover "
          />
        </div>
        
        </div>
        <div className=" p-2 ">
          <h1 className="mb-1 text-center text-2xl font-bold">
            {mediaexe.name}
          </h1>
          <p className="text-center text-sm text-gray-800">
            {mediaexe.designation}
          </p>
        </div>
        <div className="flex justify-center gap-5 pt-5 text-xl text-gray-700   ">
        <a href={mediaexe.instagram} className="hover:text-red-600" target="_blank"><BsInstagram /></a>
            <a href={mediaexe.linkedin} className="hover:text-red-600" target="_blank"><BsLinkedin /></a>
            <a href={mediaexe.twitter} className="hover:text-red-600" target="_blank"><BsTwitter  /></a>
            <a href={mediaexe.github}className="hover:text-red-600" target="_blank"> <BsGithub  /></a>    
        </div>
      </div>
    </div>
  );
}

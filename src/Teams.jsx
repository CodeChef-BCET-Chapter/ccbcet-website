import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";

import CpexeCard from "./components/CpexeCard";
import cpexeData from "./data/cpexeData";
import MediaexeCard from "./components/MediaexeCard";
import mediaexeData from "./data/mediaexeData";
import EventexeCard from "./components/EventexeCard";
import eventexeData from "./data/eventexeData";

export default function Teams() {
  return (
    <div className=" bg-gray-100">
      <section className="  mx-auto   max-w-7xl overflow-hidden px-4 sm:px-6 ">
        <article className="col-auto mb-10 mt-10">
          <div className="title-font mb-20 text-center text-2xl font-medium text-gray-700 sm:text-3xl">
            <p className="">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              veniam atque nostrum repellat aspernatur consectetur ut corrupti
              quas cupiditate id fuga mollitia est deleniti officiis fugit
              fugiat, animi perferendis blanditiis.
            </p>
          </div>
          <h1 className=" title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
            Our Chapter Leads
          </h1>
          <div className=" grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="  my-10  rounded-lg bg-white p-10 shadow-xl ">
              <div className=" -mt-28 flex  justify-center ">
                <img
                  src="/img/Teams/viresh.jpg"
                  alt=""
                  className=" h-32 w-32 rounded-full border-2 border-red-600 "
                />
              </div>
              <div className=" p-2 ">
                <h1 className="mb-1 text-center text-2xl font-bold">
                  Viresh Dev
                </h1>
                <p className="text-center text-sm text-gray-800">President</p>
              </div>
              <div className="flex justify-center gap-5 pt-5 text-xl text-gray-700   ">
                <a href="" className="hover:text-red-600  ">
                  <BsInstagram />
                </a>
                <a href="" className="hover:text-red-600">
                  <BsLinkedin />
                </a>
                <a href="" className="hover:text-red-600">
                  <BsTwitter />
                </a>
                <a href="" className="hover:text-red-600">
                  <BsGithub />
                </a>
              </div>
            </div>
            <div className=" my-10 rounded-lg bg-white p-10 shadow-xl ">
              <div className=" -mt-28 flex  justify-center ">
                <img
                  src="/img/Teams/Saurabh Pic.jpg"
                  alt=""
                  className=" h-32 w-32 rounded-full border-2 border-red-600 "
                />
              </div>
              <div className=" p-2 ">
                <h1 className="mb-1 text-center text-2xl font-bold">
                  Saurabh Kumar
                </h1>
                <p className="text-center text-sm text-gray-800">
                  Outreach & Media Lead
                </p>
              </div>
              <div className="flex justify-center gap-5 pt-5 text-xl text-gray-700   ">
                <BsInstagram className="hover:text-red-600" />
                <BsLinkedin className="hover:text-red-600" />
                <BsTwitter className="hover:text-red-600" />
                <BsGithub className="hover:text-red-600" />
              </div>
            </div>
            <div className=" my-10 rounded-lg bg-white p-10 shadow-xl ">
              <div className=" -mt-28 flex  justify-center ">
                <img
                  src="/img/Teams/Saurabh Pic.jpg"
                  alt=""
                  className=" h-32 w-32 rounded-full border-2 border-red-600 "
                />
              </div>
              <div className=" p-2 ">
                <h1 className="mb-1 text-center text-2xl font-bold">
                  Saurabh Kumar
                </h1>
                <p className="text-center text-sm text-gray-800">
                  Outreach & Media Lead
                </p>
              </div>
              <div className="flex justify-center gap-5 pt-5 text-xl text-gray-700   ">
                <BsInstagram className="hover:text-red-600" />
                <BsLinkedin className="hover:text-red-600" />
                <BsTwitter className="hover:text-red-600" />
                <BsGithub className="hover:text-red-600" />
              </div>
            </div>
            <div className=" my-10 rounded-lg bg-white p-10 shadow-xl ">
              <div className=" -mt-28 flex  justify-center ">
                <img
                  src="/img/Teams/Saurabh Pic.jpg"
                  alt=""
                  className=" h-32 w-32 rounded-full border-2 border-red-600 "
                />
              </div>
              <div className=" p-2 ">
                <h1 className="mb-1 text-center text-2xl font-bold">
                  Saurabh Kumar
                </h1>
                <p className="text-center text-sm text-gray-800">
                  Outreach & Media Lead
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
        </article>
        {/* Cp Executives */}
        <article className="col-auto mb-10 mt-10">
          <h1 className=" title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
            CP Executive
          </h1>
          <section className=" flex flex-wrap justify-center gap-5">
            {cpexeData.map(cpexe => (
              <CpexeCard cpexe={cpexe} key={cpexe.title} />
            ))}
          </section>
        </article>

        {/* Outreach & Media Executive */}
        <article className="col-auto mb-10 mt-10">
          <h1 className=" title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
            Outreach & Media Executive
          </h1>
          <section className=" flex flex-wrap justify-center gap-5">
            {mediaexeData.map(mediaexe => (
              <MediaexeCard mediaexe={mediaexe} key={mediaexe.title} />
            ))}
          </section>
        </article>

        {/* Event Executive */}
        <article className="col-auto mb-10 mt-10">
          <h1 className=" title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
            Event Executive
          </h1>
          <section className=" flex flex-wrap justify-center gap-5">
            {eventexeData.map(eventexe => (
              <EventexeCard eventexe={eventexe} key={eventexeData.index} />
            ))}
          </section>
        </article>
      </section>
    </div>
  );
}

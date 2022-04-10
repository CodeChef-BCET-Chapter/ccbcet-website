import React from "react";
import Landing from "./components/Landing";
import Youtubevideo from "./components/Youtubevideo";
import EventCard from "./components/EventCard";
import eventCard from "./data/eventCard";
import Opportunity from "./components/Opportunity";
import Faq from "./components/Faq";

export default function Home() {
  const runCallback = (cb) => {
    return cb();
  };
  return (
    <div className="space-y-24">
      <Landing />
      <Youtubevideo />
      {/* Event Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12 overflow-hidden">
        <article className="mb-10 col-auto">
          <div className="text-center mb-14">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Event & Workshops
            </h1>
          </div>
          {/* banner */}
          <div className="flex flex-col xl:flex-row rounded-lg bg-gray-100">
            <img
              className=" xl:rounded-l-lg rounded-t-lg xl:rounded-t-none roun w-auto xl:h-96"
              src="/img/Code Aaj Kal Contest.png"
              alt="banner"
            />
            <div className="xl:p-16 p-10">
              <div className=" mb-8">
                <h1 className=" text-2xl w-full font-semibold text-gray-900 mb-4">
                  CODE AAJ KAL <span className=" text-red-500">3.0</span>
                </h1>
                <p>
                  A 36-hours online coding contest on CodeChef Platform, hosted
                  by CodeChef RCOEM Chapter in collaboration with CodeChef BCET
                  Chapter to be conducted on 14th-15th April.
                </p>
              </div>
              <div className="">
                <a
                  href="/eventdetails"
                  className=" text-center bg-red-600 font-semibold text-white p-2 px-4  rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 mt-10"
                >
                  Register Here
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <p className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-2xl text-gray-900 font-bold">
              Recent Events
            </p>
          </div>

          <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {runCallback(() => {
              const row = [];
              for (let i = 0; i < 4; i++) {
                row.push(
                  <EventCard events={eventCard[i]} key={eventCard[i].title} />
                );
              }
              return row;
            })}
          </section>
        </article>
      </section>
      <Opportunity />
      <Faq />
    </div>
  );
}

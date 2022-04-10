import React from "react";
import EventCard from "./components/EventCard";
import eventCard from "./data/eventCard";

export default function Event() {
  return (
    <div>
      {/* Event Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12 overflow-hidden">
        <article className="mb-10 col-auto">
          <div className=" mb-20">
            <h1 className="sm:text-3xl text-2xl text-center font-medium text-center title-font text-gray-900 mb-4">
              Event & Workshops
            </h1>
            {/* banner */}
            <div className="flex flex-col xl:flex-row rounded-lg bg-gray-100">
              <img
                className=" xl:rounded-l-lg rounded-t-lg xl:rounded-t-none roun w-auto xl:h-96"
                src="public/img/Code Aaj Kal Contest.png"
                alt="banner"
              />
              <div className="xl:p-16 p-10">
                <div className=" mb-8">
                  <h1 className=" text-2xl w-full font-semibold text-gray-900 mb-4">
                    CODE AAJ KAL <span className=" text-red-500">3.0</span>
                  </h1>
                  <p>
                    A 36-hours online coding contest on CodeChef Platform,
                    hosted by CodeChef RCOEM Chapter in collaboration with
                    CodeChef BCET Chapter to be conducted on 14th-15th April.
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
          </div>
          <div className="text-center mt-10">
            <p className="leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-2xl text-gray-900 font-bold">
              Recent Events
            </p>
          </div>
          <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {eventCard.map(events => (
              <EventCard events={events} key={events.title} />
            ))}
          </section>
        </article>
      </section>
    </div>
  );
}

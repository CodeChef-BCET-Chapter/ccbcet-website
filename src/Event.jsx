import React from "react";
import EventCard from "./components/EventCard";
import eventCard from "./data/eventCard";

export default function Event() {
  return (
    <div>
      {/* Event Cards */}
      <section className="mx-auto mt-12 mb-12 max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-4">
        <article className="col-auto mb-10">
          <div className=" mb-20">
            <h1 className="title-font mb-8 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
              Event & Workshops
            </h1>
            {/* banner */}
            <div className="flex flex-col rounded-lg bg-gray-100 xl:flex-row">
              <img
                className=" roun w-auto rounded-t-lg xl:h-96 xl:rounded-l-lg xl:rounded-t-none"
                src="/img/Code Aaj Kal Contest.png"
                alt="banner"
              />
              <div className="p-10 xl:p-16">
                <div className=" mb-8">
                  <h1 className=" mb-4 w-full text-2xl font-semibold text-gray-900">
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
                    className=" focus:outline-none mt-10 rounded-full bg-red-600 p-2 px-4  text-center font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-none focus:ring"
                  >
                    Register Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="mx-auto text-2xl font-bold leading-relaxed text-gray-900 lg:w-3/4 xl:w-2/4">
              Recent Events
            </p>
          </div>
          <section className="mt-6 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {eventCard.map(events => (
              <EventCard events={events} key={events.title} />
            ))}
          </section>
        </article>
      </section>
    </div>
  );
}

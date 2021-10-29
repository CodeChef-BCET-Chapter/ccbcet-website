import React from "react";
import Landing from "./components/Landing";
import Youtubevideo from "./components/Youtubevideo";
import EventCard from "./components/EventCard";
import eventCard from "./data/eventCard";
import Opportunity from "./components/Opportunity";
import Faq from "./components/Faq";

export default function Home() {
  return (
    <div>
      <Landing />
      <Youtubevideo/>
      <Opportunity/>
      {/* Event Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12 overflow-hidden">
        <article className="mb-10 col-auto">
        <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Event & Workshops
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              Recent Events
            </p>
          </div>
            <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {eventCard.map((events) => (
              <EventCard events={events} key={events.title} />
            ))}
          </section>
        </article>
      </section>
      <Faq/>
    </div>
  )
}
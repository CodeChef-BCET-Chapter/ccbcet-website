import React from "react";
import NavBar from "./components/NavBar";
import EventCard from "./components/EventCard";
import eventCard from "./data/eventCard";
import Foot from "./components/Foot";

export default function App() {
  return (
    <div>
      <NavBar />
      
      {/* Event Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12 overflow-hidden">
        <article className="mb-10 col-auto">
            <h2 className="text-2xl font-extrabold text-gray-900 text-center">Events & Workshops</h2>
            <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {eventCard.map((events) => (
                    <EventCard events={events} key={events.title} />
                  ))}
            </section>
        </article>
      </section>

      <Foot />
    </div>

  );
}

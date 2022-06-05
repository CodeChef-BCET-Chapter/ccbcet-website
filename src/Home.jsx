import React, { useEffect, useState } from "react";
import Landing from "./components/Landing";
import Youtubevideo from "./components/Youtubevideo";
import EventCard from "./components/EventCard";
import eventCard from "./data/eventCard";
import Opportunity from "./components/Opportunity";
import Faq from "./components/Faq";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { IKImage } from "imagekitio-react";
import EventCardSkelton from "./components/EventCardSkelton";
import { getEvents } from "./firestoredb";
const urlEndpoint = "https://ik.imagekit.io/botoixhvc";

export default function Home() {
  const [events, setEvents] = useState(null);
  useEffect(() => {
    getEvents().then(value => {
      setEvents(value);
      console.log(value);
    });
  }, []);

  const runCallback = cb => {
    return cb();
  };
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="space-y-24">
      <Landing />
      <Youtubevideo />
      {/* Event Cards */}
      <section className="mx-auto mt-12 mb-12 max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-4">
        <article className="col-auto mb-10">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            id="codeaajkal"
            className="mb-14 text-center"
          >
            <h1 className="title-font mb-4 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
              Event & Workshops
            </h1>
          </div>
          <div className="mb-6 text-center">
            <p className="mx-auto text-2xl font-bold leading-relaxed text-gray-700 lg:w-3/4 xl:w-2/4">
              Upcoming Events
            </p>
          </div>
          {/* banner */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col rounded-lg bg-gray-100 shadow-xl xl:flex-row "
          >
            <IKImage
              className=" roun w-auto rounded-lg xl:h-96"
              urlEndpoint={urlEndpoint}
              path="induction_poster_for_website_X1yC0NY5G.png"
              alt="banner"
              lqip={{ active: true }}
              loading="lazy"
            />
            <div className="p-10 xl:p-16">
              <div className=" mb-8">
                <h1 className=" mb-4 w-full text-2xl font-semibold text-gray-900">
                  INDUCTION <span className=" text-red-500">2K22</span>
                </h1>
                <p>
                  Introuduction to CodeChef BCET
                  Chapter on 11th June at Seminar Hall CST Block.
                </p>
              </div>
              <div className="">
                <Link
                  to="/event-registration/:id"
                  className=" mt-10 rounded-full bg-red-600 p-2 px-4 text-center  font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-none focus:outline-none focus:ring"
                >
                  Register Here
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-10 text-center"
          >
            <p className="mx-auto text-2xl font-bold leading-relaxed text-gray-900 lg:w-3/4 xl:w-2/4">
              Recent Events
            </p>
          </div>

          <section
            data-aos="fade-up"
            data-aos-duration="1000"
            className="mt-6 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {events &&
              events.map((e, index) => <EventCard events={e} key={index} />)}
          </section>
        </article>
      </section>
      <Opportunity />
      <Faq />
    </div>
  );
}

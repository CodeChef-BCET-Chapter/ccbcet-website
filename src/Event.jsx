import React, { useEffect, useState } from "react";
import EventCard from "./components/EventCard";
import { IKImage } from "imagekitio-react";
import { getEvents } from "./firestoredb";
import { Link } from "react-router-dom";
import EventCardSkelton from "./components/./skelton/EventCardSkelton";
import "react-loading-skeleton/dist/skeleton.css";
import { UserAuth } from "./context/AuthContext";
import LoginPopup from "./components/modal/LoginPopup";
const urlEndpoint = "https://ik.imagekit.io/botoixhvc";
export default function Event() {
  const { user } = UserAuth();
  const [showModal, setShowModal] = useState(false);

  const [events, setEvents] = useState(null);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getEvents().then((value) => {
      setEvents(value);
      setLoading(false);
      console.log(value);
    });
  }, []);
  return (
    <div>
      {/* Event Cards */}
      {showModal && <LoginPopup onConfirm={() => setShowModal(false)} />}

      <section className="mx-auto mt-12 mb-12 max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-4">
        <article className="col-auto mb-10">
          <div className=" mb-20">
            <h1 className="title-font mb-8 text-center text-2xl font-medium text-gray-900 sm:text-3xl">
              Event & Workshops
            </h1>
            <div className="mt-10 text-center my-5">
              <p className="mx-auto text-2xl font-bold leading-relaxed text-gray-900 lg:w-3/4 xl:w-2/4">
                Upcoming Event
              </p>
            </div>
            {/* banner */}
            <div className="flex flex-col rounded-lg bg-gray-100 shadow-xl xl:flex-row">
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
                    Introuduction to CodeChef BCET Chapter on 11th June at
                    Seminar Hall CST Block.
                  </p>
                </div>
                <div className="">
                  {!user ? (
                    <button
                      onClick={() => setShowModal(true)}
                      className=" mt-10 rounded-full bg-red-600 p-2 px-4 text-center  font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-none focus:outline-none focus:ring"
                    >
                      Register Here
                    </button>
                  ) : (
                    <Link
                      to="/event-registration/CE6VSqi7LLhwKLXTxdaV"
                      className=" mt-10 rounded-full bg-red-600 p-2 px-4 text-center  font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-none focus:outline-none focus:ring"
                    >
                      Register Here
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 text-center">
            <p className="mx-auto text-2xl font-bold leading-relaxed text-gray-900 lg:w-3/4 xl:w-2/4">
              Recent Events
            </p>
          </div>
          {/* <section className="mt-6 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {events &&
              events.map((e, index) => <EventCard events={e} key={index} />)}
          </section> */}
          {isLoading ? (
            <div className="">
              <section className="mt-6 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                {[...Array(8)].map((item, index) => (
                  <EventCardSkelton key={index} />
                ))}
              </section>
            </div>
          ) : (
            <div className="">
              <section className="mt-6 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                {events &&
                  events.map((e, index) => (
                    <EventCard events={e} key={index} />
                  ))}
              </section>
            </div>
          )}
        </article>
      </section>
    </div>
  );
}

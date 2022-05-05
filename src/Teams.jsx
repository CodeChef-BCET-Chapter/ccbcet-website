import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter, BsGithub } from "react-icons/bs";
import LeadsCard from "./components/LeadsCard";
import leadsData from "./data/leadsData";
import CpexeCard from "./components/CpexeCard";
import cpexeData from "./data/cpexeData";
import MediaexeCard from "./components/MediaexeCard";
import mediaexeData from "./data/mediaexeData";
import EventexeCard from "./components/EventexeCard";
import eventexeData from "./data/eventexeData";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Teams() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=" bg-gray-100">
      <section className="  mx-auto   max-w-7xl overflow-hidden px-4 sm:px-6 ">
        <article className="col-auto mb-10 mt-10">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="title-font mb-20 text-center text-2xl font-medium text-gray-700 sm:text-3xl"
          >
            <p className="">
              {/* <span className="">Meet The Team</span><br /> */}
              Passionate students driving the success of the Chapter
            </p>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl "
          >
            Our Chapter Leads
          </h1>
          {/* Chapter Leads */}

          <section className=" flex flex-wrap justify-center gap-5">
            {leadsData.map(leads => (
              <LeadsCard leads={leads} key={leads.title} />
            ))}
          </section>
        </article>
        {/* Cp Executives */}
        <article className="col-auto mb-10 mt-10">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl"
          >
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
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            className=" title-font mb-20 text-center text-2xl font-medium text-gray-900 sm:text-3xl"
          >
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

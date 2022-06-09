import React from "react";
import { IKImage } from "imagekitio-react";
import { Link } from "react-router-dom";
const urlEndpoint = "https://ik.imagekit.io/botoixhvc";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdLocationPin, MdAccessTime } from "react-icons/md";

export default function EventCard({ events}) {
  return (
    <div>
      <div className="group relative mb-auto mt-auto flex h-auto w-auto transform overflow-hidden rounded-lg bg-white shadow-xl transition duration-500 ease-in-out hover:scale-105 sm:hidden">
        <div className="relative ">
          <IKImage
            src={events.imageUrl}
            alt={events.imageAlt}
            urlEndpoint={urlEndpoint}
            lqip={{ active: true }}
            loading="lazy"
            className=" h-full  w-full"
          />
        </div>
        <div>
          <div className="px-3 py-3 subpixel-antialiased ">
            <h1 className="text-black-500 pb-2 font-serif text-xl font-bold">
              {events.title}
            </h1>
            <table className="mt-2 font-serif text-sm text-gray-600">
              <tbody>
                <tr>
                  <td width="15%" className="p-1 text-yellow-600">
                    <span className="flex items-center text-lg">
                      <FaRegCalendarAlt />
                    </span>
                  </td>
                  <td>
                    {events.date}
                    <sup>{events.subscript}</sup>
                    {events.year}
                  </td>
                </tr>
                <tr>
                  <td className="p-1 text-red-600">
                    <span className="flex items-center text-lg">
                      <MdLocationPin />
                    </span>
                  </td>
                  <td>{events.platform}</td>
                </tr>
                <tr>
                  <td className="p-1 text-green-600">
                    <span className="flex items-center text-lg">
                      <MdAccessTime />
                    </span>
                  </td>
                  <td>{events.time}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            href={events.href}
            target="blank"
            className="cursor-not-allowed  cu float-right m-2 mb-5 mr-3 w-32 rounded-full bg-red-600 p-2 pl-4 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-none focus:outline-none focus:ring"
          >
            {" "}
            {events.button}
          </button>
        </div>
      </div>
      {/* Dextop View */}
      <div
        className="w-ful group relative mb-auto mt-auto hidden h-full  
      transform overflow-hidden 
      rounded-lg bg-white shadow-xl transition
      duration-500 ease-in-out hover:scale-105 sm:block"
      >
        <div className="relative w-full">
          <img
            src={events.imageUrl}
            alt={events.imageAlt}
            className=" h-60 w-full"
          />
        </div>
        <div>
          <div className="px-3 py-3 subpixel-antialiased ">
            <h1 className="text-black-500 pb-2 font-serif text-xl font-bold">
              {events.title}
            </h1>
            <table className="mt-2 font-serif text-sm text-gray-600">
              <tbody>
                <tr>
                  <td width="15%" className="p-1 text-yellow-600 ">
                    <span className="flex items-center text-lg ">
                      <FaRegCalendarAlt />
                    </span>
                  </td>
                  <td>
                    {events.date}
                    <sup>{events.subscript}</sup>
                    {events.year}
                  </td>
                </tr>
                <tr>
                  <td className="p-1 text-red-600">
                    <span className="flex items-center text-lg">
                      <MdLocationPin />
                    </span>
                  </td>
                  <td>{events.platform}</td>
                </tr>
                <tr>
                  <td className="p-1 text-green-600">
                    <span className="flex items-center text-lg ">
                      <MdAccessTime />
                    </span>
                  </td>
                  <td>{events.time}</td>
                </tr>
              </tbody>
            </table>
          </div>
          {events.button === "Register Here" ? (
            <Link
              to={`/event-registration/${events.id}`}
              type="button"
              className="float-right m-2 mb-5 mr-3 w-32 rounded-full bg-red-600 p-2 pl-4 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-none focus:outline-none focus:ring"
            >
              {events.button}
            </Link>
          ) : (
            <Link
              to={events.href}
              target="blank"
              type="button"
              className="  float-right m-2 mb-5 mr-3 w-32 rounded-full bg-red-600 p-2 pl-4 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-none focus:outline-none focus:ring-red-800"
            >
              {events.button}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

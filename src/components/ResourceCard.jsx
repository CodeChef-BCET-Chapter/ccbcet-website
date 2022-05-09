import React from "react";

export default function ResourceCard({ resources }) {
  return (
    <div data-aos="fade-up" data-aos-duration="1000">
      <div className="group relative mb-auto mt-auto hidden h-full w-full transform overflow-hidden rounded-lg bg-white shadow-xl transition duration-500 ease-in-out hover:scale-105 sm:block">
        <div className="relative">
          <img
            src={resources.imageUrl}
            alt={resources.imageAlt}
            className="h-36 w-80"
          />
        </div>
        <div>
          <div className="px-3 py-3 subpixel-antialiased ">
            <h1 className="text-black-500 pb-2 font-serif text-xl font-bold">
              {resources.title}
            </h1>
            <table className="font-serif text-lg text-gray-600">
              <tr>
                <td className="text-red-600"></td>
                <td>{resources.tags}</td>
              </tr>
            </table>
          </div>
          <a
            href={resources.href}
            target="_blank"
            className=" focus:outline-none float-right m-2 mb-5 mr-3 w-32 rounded-full bg-red-600 p-2 pl-4 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-none focus:ring"
          >
            {" "}
            {resources.button}
          </a>
        </div>
      </div>
    </div>
  );
}

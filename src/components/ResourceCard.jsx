import React from "react";

export default function ResourceCard({ resources }) {
  return (
    <div>
      <div className="bg-white group w-auto relative mb-auto mt-auto rounded-lg overflow-hidden h-auto transition duration-500 ease-in-out transform shadow-2xl hover:scale-105 flex sm:hidden">
        <div className="relative">
          <img src={resources.imageUrl} alt={resources.imageAlt} className=" w-48 h-36" />
        </div>
        <div>
          <div className="px-3 py-3 subpixel-antialiased ">
            <h1 className="text-xl text-black-500 pb-2 font-bold font-serif">{resources.title}</h1>
            <table className="font-serif text-gray-600 text-sm">
              <tr>
                <td className="text-red-600"></td>
                <td>{resources.tags}</td>
              </tr>
            </table>
          </div>
          <a href={resources.href} target="_blank" className=" float-right text-center mb-5 mr-3 bg-red-600 font-semibold text-white p-2 pl-4 w-24 rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"> {resources.button}</a>
        </div>
      </div>

      <div className="bg-white group w-auto relative mb-auto mt-auto rounded-lg overflow-hidden h-auto transition duration-500 ease-in-out transform shadow-2xl hover:scale-105 hidden sm:block">
        <div className="relative">
          <img src={resources.imageUrl} alt={resources.imageAlt} className="w-80 h-36" />
        </div>
        <div>
          <div className="px-3 py-3 subpixel-antialiased ">
            <h1 className="text-xl text-black-500 pb-2 font-bold font-serif">{resources.title}</h1>
            <table className="font-serif text-gray-600 text-lg">
              <tr>
                <td className="text-red-600"></td>
                <td>{resources.tags}</td>
              </tr>
            </table>
          </div>
          <a href={resources.href} target="_blank" className=" float-right text-center mb-5 mr-3 bg-red-600 font-semibold text-white p-2 pl-4 w-32 rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"> {resources.button}</a>
        </div>
      </div>
    </div>
  )
}
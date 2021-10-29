import React from "react";

export default function EventCard({events}){
    return(
        <div className="bg-white group w-auto relative mb-auto mt-auto rounded-lg overflow-hidden h-auto transition duration-500 ease-in-out transform shadow-2xl hover:scale-105">
            <div className="relative">
                <img src={events.imageUrl} alt={events.imageAlt} className=" w-full h-full object-center object-cover" />
            </div>
            <div className="px-3 py-3 subpixel-antialiased ">
                <h1 className="text-xl text-black-500 pb-2 font-bold font-serif">{events.title}</h1>
                <table className="font-serif text-gray-600 mt-2 text-sm">
                    <tr>
                        <td width="15%" className="text-yellow-600"><i className="far fa-calendar-alt"></i></td>
                        <td>{events.date}<sup>{events.suscript}</sup>{events.year}</td>
                    </tr>
                    <tr>
                        <td className="text-red-600"><i className="fas fa-map-marker-alt"></i></td>
                        <td>{events.platform}</td>
                    </tr>
                    <tr>
                        <td className="text-green-600"><i className="far fa-clock"></i></td>
                        <td>{events.time}</td>
                    </tr>
                </table>
            </div>
            <a href={events.href} target="blank" className=" float-right text-center mb-5 mr-3 bg-red-600 font-semibold text-white p-2 pl-4 w-32 rounded-full hover:bg-red-700 focus:outline-none focus:ring shadow-lg hover:shadow-none transition-all duration-300 m-2"> {events.button}</a>
        </div>
    )
}
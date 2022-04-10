import React from "react";

export default function Opportunity() {
  return (
    <div>
      <section className="text-gray-700">
        <div className="container px-5 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              Opportunities BCET Chapter provides students with
            </h1>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 ">
            <div className="w-full lg:w-1/2 px-4 py-2">
              <div
                href="#"
                className=" p-6 bg-white  border-gray-200 rounded-lg mb-4 transition duration-500 ease-in-out transform shadow-md border hover:scale-105 "
              >
                <p className="font-semibold text-gray-700 antialiased ">
                  We help students become better problem solver by fostering
                  learning and professional development.
                </p>
              </div>
              <div
                href="#"
                className=" p-6 bg-white  border-gray-200 rounded-lg mb-4 transition duration-500 ease-in-out transform shadow-md border hover:scale-105  "
              >
                <p className="font-semibold text-gray-700  antialiased ">
                  You will get the opportunity to receive training and develop
                  communication, project development, time management and
                  programming skills while at college.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              <div
                href="#"
                className=" p-6 bg-white border-gray-200 rounded-lg mb-4  transition duration-500 ease-in-out transform shadow-md border hover:scale-105  "
              >
                <p className="font-semibold text-gray-700 antialiased">
                  We provide proper mentorship and resources to become a better
                  programmer, who can compete on global scale.
                </p>
              </div>
              <div
                href="#"
                className=" p-6 bg-white border-gray-200 rounded-lg mb-4  transition duration-500 ease-in-out transform shadow-md border hover:scale-105  "
              >
                <p className="font-semibold text-gray-700 antialiased">
                  Being a part of a large community, you will get an opportunity
                  to interact with diverse CodeChef community and top tech
                  leaders across the country.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

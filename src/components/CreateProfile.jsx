import React, { useRef, useState } from "react";

function CreateProfile() {
  return (
    <div className=" bg-gray-100 pt-28 pb-10">
      <div className=" mx-2">
        <form className="m-auto -mt-16 w-full rounded-xl bg-white p-4 shadow-xl sm:w-2/3 md:w-3/5 ">
          <span className="flex justify-center pb-5 text-2xl font-bold text-gray-800">
            Create Profile
          </span>
          {/* <div className=" flex justify-center ">
            <div className=" mb-6 h-32 w-32   rounded-full border-3 border-white">
              <img
                src="img/Teams/exe.png"
                alt="CreateProfile"
                className=" rounded-full  object-cover "
              />
            </div>
          </div> */}
          <div className="mb-6 grid xl:grid-cols-2 xl:gap-6">
            <div className="">
              <label
                htmlFor="Name"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                name="Name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600 "
                placeholder="name"
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="LastName"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                name="Name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600 "
                placeholder="Last name"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              className="block w-full rounded-lg  border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600 "
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="contact"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Contact No.
            </label>

            <input
              type="tel"
              id="tel"
              className="block w-full rounded-lg  border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600 "
              placeholder="Contact No."
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="College"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              College
            </label>
            <input
              type="text"
              name="Name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600 "
              placeholder="College Name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Designation"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Batch
            </label>
            <select
              name="Designation"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600  "
              required
            >
              <option value="Choose">--choose your Batch--</option>
              <option value="lead">2022-2026</option>
              <option value="CP">2021-2025</option>
              <option value="Media">2020-2024</option>
              <option value="Event">2019-2023</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="Branch"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Branch
            </label>
            <input
              type="text"
              name="Name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600 "
              placeholder="Branch"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="CodechefUserName"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              CodeChef username
            </label>
            <input
              type="text"
              name="CodechefUserName"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600  "
              placeholder="codechef username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Skills"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Skills
            </label>
            <input
              type="text"
              name="Skills"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600  "
              placeholder="C++, Python, Java"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900 "
            >
              Bio
            </label>
            <textarea
              id="message"
              rows="4"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600 "
              placeholder="About "
            ></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="text-md w-full rounded-lg bg-red-600 px-5 py-2.5 text-center font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300  sm:w-auto"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateProfile;

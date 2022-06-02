import React, { useRef, useState } from "react";

function CreateProfile() {
  const initialFormData = Object.freeze({
    username: "",
    password: "",
  });
  const [formData, updateFormData] = React.useState(initialFormData);
  function handleChange() {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  }
  return (
    <div className=" bg-gray-100 pt-28 pb-10">
      <div className=" mx-2">
        <form
          onSubmit={handleSubmit}
          className="m-auto -mt-16 w-full rounded-xl bg-white p-4 shadow-xl sm:w-2/3 md:w-2/5 "
        >
          <span className="flex justify-center pb-5 text-2xl font-bold text-gray-800">
            Create Profile
          </span>
          <div className="mb-6 ">
            <label
              htmlFor="Name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="Name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600 "
              placeholder="name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>

            <input
              onChange={handleChange}
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
              onChange={handleChange}
              type="tel"
              name="contact"
              className="block w-full rounded-lg  border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600 "
              placeholder="Contact No."
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="college"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              College
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="college"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600 "
              placeholder="College Name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="designation"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Batch
            </label>
            <select
              name="designation"
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
              htmlFor="branch"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Branch
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="branch"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600 "
              placeholder="Branch"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="codechefusername"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              CodeChef username
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="codechefusername"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600  "
              placeholder="codechef username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="skills"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Skills
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="skills"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600  "
              placeholder="C++, Python, Java"
              required
            />
          </div>
          <div className="mb-6 grid xl:grid-cols-3 xl:gap-6">
            <div className="">
              <label
                htmlFor="linkedin"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                LinkedIn
              </label>
              <input
                type="text"
                name="linkedin"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600 "
                placeholder="LinkedIn"
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="github"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Github
              </label>
              <input
                type="text"
                name="github"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600 "
                placeholder="Github"
                required
              />
            </div>
            <div className="">
              <label
                htmlFor="twitter"
                className="mb-2 block text-sm font-medium text-gray-700"
              >
                Twitter
              </label>
              <input
                type="text"
                name="twitter"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600 "
                placeholder="twitter"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900 "
            >
              Bio
            </label>
            <textarea
              name="message"
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

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";
import { addParticipants } from "./firestoredb";

function EventForm() {
  let { id } = useParams();
  const { user } = UserAuth();

  console.log(id);
  const initialFormData = Object.freeze({
    name: "",
    email: "",
    contact: "",
    branch: "",
    year: "",
    codechefusername: "",
    message: "",
  });
  const [formData, updateFormData] = useState(initialFormData);
  function handleChange(e) {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    user && addParticipants(formData, id, user.id);
    // ... submit to API or something
  };
  return (
    <div className=" bg-gray-100 pb-5">
      <div className="m-auto  h-60 rounded-b-xl bg-red-400 sm:w-full md:w-3/4 "></div>

      <div className="relative z-40 mx-2">
        <form
          onSubmit={handleSubmit}
          className="m-auto -mt-16 w-full rounded-xl bg-white p-4 shadow-xl sm:w-2/3 md:w-2/5 "
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
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
              name="email"
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
              htmlFor="branch"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Branch
            </label>
            <select
              onChange={handleChange}
              name="branch"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600  "
              required
            >
              <option name="branch" value="Choose">
                --choose your branch--
              </option>
              <option name="branch" value="lead">
                CSE
              </option>
              <option name="branch" value="CP">
                IT
              </option>
              <option name="branch" value="Media">
                ECE
              </option>
              <option name="branch" value="Event">
                EE
              </option>
              <option name="branch" value="Volunteer">
                ME
              </option>
              <option name="branch" value="Volunteer">
                Civil
              </option>
            </select>
          </div>

          <div className="mb-6 block">
            <span className="text-sm font-medium text-gray-700">Year</span>
            <div className="mt-2">
              <div>
                <label className="inline-flex items-center">
                  <input
                    onChange={handleChange}
                    type="radio"
                    className="form-radio h-4 w-4 text-green-500 checked:bg-green-500"
                    name="year"
                    value="1"
                  />
                  <span className="ml-2">1st Year</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    onChange={handleChange}
                    type="radio"
                    className="form-radio h-4 w-4"
                    name="year"
                    value="2"
                  />
                  <span className="ml-2">2nd Year</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    onChange={handleChange}
                    type="radio"
                    className="form-radio h-4 w-4"
                    name="year"
                    value="3"
                  />
                  <span className="ml-2">3rd Year</span>
                </label>
              </div>
              <div>
                <label className="inline-flex items-center">
                  <input
                    onChange={handleChange}
                    type="radio"
                    className="form-radio h-4 w-4"
                    name="year"
                    value="4"
                  />
                  <span className="ml-2">4th Year</span>
                </label>
              </div>
            </div>
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
              htmlFor="message"
              className="mb-2 block text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              onChange={handleChange}
              name="message"
              rows="4"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600 "
              placeholder="Ask us anything..."
            ></textarea>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="text-md w-full rounded-lg bg-red-600 px-5 py-2.5 text-center font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300  sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventForm;

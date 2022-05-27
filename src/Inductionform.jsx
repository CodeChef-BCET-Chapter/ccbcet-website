import axios from "axios";
import React, { useRef, useState } from "react";

function Inductionform() {
  return (
    <div className=" bg-gray-100 pb-5">
      <div className="m-auto  h-60 rounded-b-xl bg-red-400 sm:w-full md:w-3/4 ">
       
      </div>

      <div className="relative z-40 mx-2">
        <form className="m-auto -mt-16 w-full rounded-xl bg-white p-4 shadow-xl sm:w-2/3 md:w-2/5 ">
          <div className="mb-6">
            <label
              htmlFor="Name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              name="Name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-600 "
              placeholder="name"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Email
            </label>

            <input
              type="email"
              id="email"
              class="block w-full rounded-lg  border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-600 "
              placeholder="name@gmail.com"
              required
            />
          </div>
          <div class="mb-6">
            <label
              for="contact"
              class="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Contact No.
            </label>

            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              id="tel"
              class="block w-full rounded-lg  border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-600 "
              placeholder="number (123-456-7890)"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="Designation"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Branch
            </label>
            <select
              name="Designation"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-600  "
              required
            >
              <option value="Choose">--choose your branch--</option>
              <option value="lead">CSE</option>
              <option value="CP">IT</option>
              <option value="Media">ECE</option>
              <option value="Event">EE</option>
              <option value="Volunteer">ME</option>
              <option value="Volunteer">Civil</option>
            </select>
          </div>

          <div class="mb-6 block">
            <span class="text-sm font-medium text-gray-700">Year</span>
            <div class="mt-2">
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio h-4 w-4 text-green-500 checked:bg-green-500"
                    name="radio"
                    value="1"
                  />
                  <span class="ml-2">1st Year</span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio h-4 w-4"
                    name="radio"
                    value="2"
                  />
                  <span class="ml-2">2nd Year</span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio h-4 w-4"
                    name="radio"
                    value="3"
                  />
                  <span class="ml-2">3rd Year</span>
                </label>
              </div>
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio h-4 w-4"
                    name="radio"
                    value="4"
                  />
                  <span class="ml-2">4th Year</span>
                </label>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="TshirtName"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              CodeChef username
            </label>
            <input
              type="text"
              name="TshirtName"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-600  "
              placeholder="codechef username"
              required
            />
          </div>
          <div className="mb-6">
            <label
              for="message"
              class="mb-2 block text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-1 focus:ring-red-600 "
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

export default Inductionform;

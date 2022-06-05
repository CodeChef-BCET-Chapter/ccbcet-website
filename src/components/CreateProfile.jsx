import React, { useState } from "react";
import { addUserData } from "../firestoredb";
import { UserAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

function CreateProfile() {
  const history = useHistory();
  const { user } = UserAuth();
  const initialFormData = Object.freeze({
    name: "",
    email: "",
    contact: "",
    branch: "",
    college: "",
    codechefusername: "",
    skills: "",
    linkedin: "",
    github: "",
    twitter: "",
    bio: "",
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
    addUserData(formData, user?.uid);
    history.push("/view-profile");
    // ... submit to API or something
  };
  return (
    <div className=" bg-gray-100 pt-28 pb-10">
      <div className=" mx-2">
        <form
          onSubmit={handleSubmit}
          className="m-auto -mt-16 w-full rounded-xl bg-white p-4 shadow-xl md:w-4/5 lg:w-3/5 xl:w-2/5"
        >
          <span className="flex justify-center pb-5 text-2xl font-bold text-gray-800">
            Create Profile
          </span>
          <div className="mb-6 ">
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
              htmlFor="batch"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Batch
            </label>
            <select
              onChange={handleChange}
              name="batch"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-red-500 focus:outline-none focus:ring-0 focus:ring-red-600  "
              required
            >
              <option name="batch" value="Choose">
                --choose your Batch--
              </option>
              <option name="batch" value="2022-2026">
                2022-2026
              </option>
              <option name="batch" value="2021-2025">
                2021-2025
              </option>
              <option name="batch" value=" 2020-2024">
                2020-2024
              </option>
              <option name="batch" value="2019-2023">
                2019-2023
              </option>
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
                onChange={handleChange}
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
                onChange={handleChange}
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
                onChange={handleChange}
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
              htmlFor="bio"
              className="mb-2 block text-sm font-medium text-gray-900 "
            >
              Bio
            </label>
            <textarea
              onChange={handleChange}
              name="bio"
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

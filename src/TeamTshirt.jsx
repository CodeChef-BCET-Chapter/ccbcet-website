import axios from "axios";
import React, { useRef, useState } from "react";
import { TiTickOutline } from "react-icons/ti";

import { useLocalStorage } from "./hooks/localstorage.js";

function TeamTshirt(props) {
  const formRef = useRef(null);
  const [showForm, setShowForm] = useLocalStorage("show-form", "true");

  function handleSubmit(e) {
    e.preventDefault();
    if (showForm === "true") {
      setShowForm("false");
    }
    if (showForm === "false") {
      setShowForm("complete");
    }

    axios.post(
      "https://script.google.com/macros/s/AKfycbwS0UdNtc33jTZKN_b4u0COB237VUay_BTyEZt0KsslH7b2_ztfxr2d0944Bhn77XjpZw/exec",
      new FormData(formRef.current)
    );
  }
  return (
    <>
      {showForm === "true" && (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="m-auto w-full p-4 sm:w-2/3 md:w-2/5 "
        >
          <h1 className="p-8 text-center text-2xl font-bold">
            Team T-Shirt Order
          </h1>
          <img src="img/exe t-shirt-01.png" alt="tshirt pic" />
          <div className="mb-6">
            <label
              htmlFor="Name"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Name
            </label>
            <input
              type="text"
              name="Name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:ring-blue-500"
              placeholder="name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <input
              type="email"
              name="Email"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              placeholder="email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Designation"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Designation
            </label>
            <select
              name="Designation"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            >
              <option value="Choose">--choose--</option>
              <option value="lead">Chapter Leader</option>
              <option value="CP">CP Executive</option>
              <option value="Media">Media Executive</option>
              <option value="Event">Event Executive</option>
              <option value="Volunteer">Volunteer</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="TshirtName"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              Name on T-Shirt
            </label>
            <input
              type="text"
              name="TshirtName"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
              placeholder="name on t-shirt"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="T-Shirt Size"
              className="mb-2 block text-sm font-medium text-gray-900"
            >
              T-Shirt Size
            </label>
            <select
              name="TshirtSize"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
            >
              <option value="Choose">--choose--</option>
              <option value="S">S (36 cm)</option>
              <option value="M">M (38 cm)</option>
              <option value="L">L (40 cm)</option>
              <option value="XL">XL (42 cm)</option>
            </select>
          </div>

          <div className="text-right">
            <button
              type="submit"
              className="focus:outline-none w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:ring-4 focus:ring-red-300  sm:w-auto"
            >
              Submit
            </button>
          </div>
        </form>
      )}
      {showForm === "false" && (
        <div className="m-auto w-full rounded-md p-4 shadow-md sm:w-2/3 md:w-2/5">
          <h1 className=" text-center text-2xl font-bold">Form Submitted!</h1>
          <p className=" text-center text-lg">
            To complete your order pay ₹ 350 using UPI ID (9097994880@ybl)
          </p>
          <img src="img/payment_qr.jpeg" alt="qr code" />
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="Name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                name="Name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:ring-blue-500"
                placeholder="Name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="Name"
                className="mb-2 block text-sm font-medium text-gray-900"
              >
                Transaction ID{" "}
                <span className="text-gray-600">
                  (After completing your payment copy the Transaction ID and
                  paste it here)
                </span>
              </label>
              <input
                type="text"
                name="Transactionid"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900  focus:ring-blue-500"
                placeholder="Transactionid"
                required
              />
            </div>
            <div className="text-right">
              <button
                type="submit"
                className="focus:outline-none w-full rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:ring-4 focus:ring-red-300  sm:w-auto"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
      {showForm === "complete" && (
        <div className=" h-full bg-gray-100 py-10 px-2 ">
          <div className="m-auto bg-white w-full rounded-md  p-4 text-center shadow-md sm:w-2/3 md:w-2/5">
            <p className=" flex justify-center p-2 text-green-600 ">
              <TiTickOutline size={70} />
            </p>
            <h1 className=" pb-6 text-5xl font-bold italic text-green-600">
              Thank You!
            </h1>
            <p className="">You have sucessfully ordered your T-Shirt</p>
            <p className="">
              Your T-Shirt will be delivered within 15-20 days.
            </p>

            <div className="text-cnter py-10">
              <a href="/" className="">
                <button
                  type="submit"
                  className="focus:outline-none max-w-max rounded-lg bg-red-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-700 focus:ring-4 focus:ring-red-300  sm:w-auto"
                >
                  Back To Home
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TeamTshirt;

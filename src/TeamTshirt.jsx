import axios from "axios";
import React, { useRef, useState } from "react";

function TeamTshirt(props) {
  const formRef = useRef(null);
  const [showForm, setShowForm] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    setShowForm(state => !state);
    console.log(new FormData(formRef.current));

    axios.post(
      "https://script.google.com/macros/s/AKfycbwS0UdNtc33jTZKN_b4u0COB237VUay_BTyEZt0KsslH7b2_ztfxr2d0944Bhn77XjpZw/exec",
      new FormData(formRef.current)
    );
  }
  return (
    <>
      {showForm ? (
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="m-auto w-full p-4 sm:w-2/3 md:w-2/5"
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
              placeholder="name on T-Shirt"
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
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
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
      ) : (
        <div className="m-auto my-5 w-full rounded-md p-5 shadow-xl sm:w-2/3 md:w-2/5">
          <h1 className=" p-2 text-center text-2xl font-bold">
            Form Submitted
          </h1>
          <p className="text-center text-lg">
            To complete your order pay ₹ 350 using UPI ID (9097994880@ybl){" "}
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
                Transactionid <span className="text-gray-600">(After completing your payment copy the
                Transaction ID and paste it here)</span>
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
    </>
  );
}

export default TeamTshirt;

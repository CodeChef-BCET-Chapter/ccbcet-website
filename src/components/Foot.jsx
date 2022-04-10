import React from "react";

export default function Foot() {
  return (
    <footer className="relative bg-gray-200 pt-8 pb-6 flex justify-center border-t-2   ">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left max-w-7xl mx-auto">
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex gap-4 items-center">
              <img
                className="h-8 w-8"
                src="/img/ccbcet-logo.svg"
                alt="CC BECT logo"
              />
              <h1 className="text-gray-700 font-bold text-xl ">CodeChef BCET Chapter</h1>

            </div>

            <div className="mt-6 lg:mb-0 mb-6">
              <button className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transform transition   hover:-translate-y-0.5 " type="button">
                <a href="https://www.facebook.com/codechefbcetchapter" className="fab fa-facebook-square" target='_blank'></a>
              </button>
              <button className="bg-white text-red-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transform transition   hover:-translate-y-0.5" type="button">
                <a href="https://www.instagram.com/codechefbcetchapter/" className="fab fa-instagram" target='_blank'></a>
              </button>
              <button className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transform transition   hover:-translate-y-0.5" type="button">
                <a href="https://twitter.com/CodeChefBCET " className="fab fa-twitter " target='_blank'></a>
              </button>
              <button className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transform transition   hover:-translate-y-0.5" type="button">
                <a href=" https://www.linkedin.com/company/codechef-bcet-chapter/" className="fab fa-linkedin" target='_blank'></a>
              </button>

              <button className="bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transform transition   hover:-translate-y-0.5" type="button">
                <a href="https://github.com/CodeChef-BCET-Chapter" className="fab fa-github" target='_blank'></a>
              </button>
              <button className="bg-white text-blue-500 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 transform transition   hover:-translate-y-0.5" type="button">
                <a href="https://discord.gg/nDjk222EQy" className="fab fa-discord" target='_blank'></a>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full  px-4">
                <span className="block uppercase text-gray-700 text-sm font-semibold mb-2">Contact Us</span>
                <ul className="list-unstyled">
                  <li className="flex gap-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-12 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <a className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm" href="" >DA-8, Sahid Sukumar Banerjee Sarani, Bidhannagar, Durgapur, West Bengal 713212, IN</a>
                  </li>
                  <li className="flex gap-4 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a className="mail overflow-hidden " href="mailto:codechefbcetchapter@gmail.com">codechefbcetchapter@gmail.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-700 font-semibold py-1">Copyright © Codechef BCET Chapter <span id="get-current-year">2022</span> </div>
          </div>
        </div>
      </div>
    </footer>

  )
}
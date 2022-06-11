import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsGithub,
  BsLinkedin,
  BsDiscord,
} from "react-icons/bs";

export default function Foot() {
  return (
    <footer className="relative flex justify-center border-t-2 bg-gray-200 pt-8 pb-6 align-bottom ">
      <div className="container mx-auto px-4">
        <div className="mx-auto flex max-w-7xl flex-wrap text-left lg:text-left">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center gap-4">
              <img
                className="h-8 w-8"
                src="/img/ccbcet-logo.svg"
                alt="CC BECT logo"
              />
              <h1 className="text-xl font-bold text-gray-700 ">
                CodeChef BCET Chapter
              </h1>
            </div>

            <div className="mt-6 mb-6 lg:mb-0">
              <button
                className="align-center mr-2 h-10 w-10 transform items-center justify-center rounded-full bg-white font-normal text-blue-600 shadow-lg outline-none transition hover:-translate-y-0.5  focus:outline-none "
                type="button"
                aria-label="facebook"
              >
                <a
                  href="https://www.facebook.com/codechefbcetchapter"
                  target="_blank"
                  aireal-label="facebook"
                >
                  <span className="flex justify-center">
                    <BsFacebook />
                  </span>
                </a>
              </button>
              <button
                className="align-center mr-2 h-10 w-10 transform items-center justify-center rounded-full bg-white font-normal text-red-500 shadow-lg outline-none transition hover:-translate-y-0.5   focus:outline-none"
                type="button"
                aria-label="instagram"
              >
                <a
                  href="https://www.instagram.com/codechefbcetchapter/"
                  target="_blank"
                  aireal-label="instagram"
                >
                  <span className="flex justify-center">
                    <BsInstagram />
                  </span>
                </a>
              </button>
              <button
                className="align-center mr-2 h-10 w-10 transform items-center justify-center rounded-full bg-white font-normal text-blue-400 shadow-lg outline-none transition hover:-translate-y-0.5   focus:outline-none"
                type="button"
                aria-label="twitter"
              >
                <a
                  href="https://twitter.com/CodeChefBCET "
                  target="_blank"
                  aireal-label="twitter"
                >
                  <span className="flex justify-center">
                    <BsTwitter />
                  </span>
                </a>
              </button>
              <button
                className="align-center mr-2 h-10 w-10 transform items-center justify-center rounded-full bg-white font-normal text-blue-600 shadow-lg outline-none transition hover:-translate-y-0.5   focus:outline-none"
                type="button"
                aria-label="linkedin"
              >
                <a
                  href=" https://www.linkedin.com/company/codechef-bcet-chapter/"
                  target="_blank"
                  aireal-label="linkedin"
                >
                  <span className="flex justify-center">
                    <BsLinkedin />
                  </span>
                </a>
              </button>

              <button
                className="align-center mr-2 h-10 w-10 transform items-center justify-center rounded-full bg-white font-normal text-black shadow-lg outline-none transition hover:-translate-y-0.5   focus:outline-none"
                type="button"
                aria-label="github"
              >
                <a
                  href="https://github.com/CodeChef-BCET-Chapter"
                  target="_blank"
                  aireal-label="github"
                >
                  <span className="flex justify-center">
                    <BsGithub />
                  </span>
                </a>
              </button>
              <button
                className="align-center mr-2 h-10 w-10 transform items-center justify-center rounded-full bg-white font-normal text-blue-500 shadow-lg outline-none transition hover:-translate-y-0.5   focus:outline-none"
                type="button"
                aria-label="discord"
              >
                <a
                  href="https://discord.gg/nDjk222EQy"
                  target="_blank"
                  aria-label="discord"
                >
                  <span className="flex justify-center">
                    <BsDiscord />
                  </span>
                </a>
              </button>
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="items-top mb-6 flex flex-wrap">
              <div className="w-full  px-4">
                <span className="mb-2 block text-sm font-semibold uppercase text-gray-700">
                  Contact Us
                </span>
                <ul className="list-unstyled">
                  <li className="flex items-center gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-12 md:w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <a
                      className="block pb-2 text-sm font-semibold text-gray-600 hover:text-gray-800"
                      href=""
                    >
                      DA-8, Sahid Sukumar Banerjee Sarani, Bidhannagar,
                      Durgapur, West Bengal 713212, IN
                    </a>
                  </li>
                  <li className="flex items-center gap-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <a
                      className="mail overflow-hidden "
                      href="mailto:codechefbcetchapter@gmail.com"
                    >
                      codechefbcetchapter@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center justify-center md:justify-between">
          <div className="mx-auto w-full px-4 text-center md:w-4/12">
            <div className="py-1 text-sm font-semibold text-gray-700">
              Copyright © Codechef BCET Chapter{" "}
              <span id="get-current-year">2022</span>{" "}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

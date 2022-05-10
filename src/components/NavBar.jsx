import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { AiOutlineHome } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import { RiTeamLine, RiBook2Line } from "react-icons/ri";
import { MdOutlineLeaderboard } from "react-icons/md";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-gray-800 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex flex-grow justify-between">
              <a href="/">
                <div className="flex items-center gap-4">
                  <img
                    className="h-8 w-8"
                    src="/img/ccbcet-logo.svg"
                    alt="CC BECT logo"
                  />
                  <h1 className="font-semibold text-white">
                    CodeChef BCET Chapter
                  </h1>
                </div>
              </a>

              <div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      href="/"
                      className="flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <AiOutlineHome className="mx-1 text-lg" /> Home
                    </a>

                    <a
                      href="/events"
                      className="flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <BsCalendarEvent className="mx-1 text-lg" /> Events
                    </a>

                   
                    <a
                      href="/teams"
                      className="flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <RiTeamLine className="mx-1 text-lg" />
                      Teams
                    </a>

                    <a
                      href="https://www.codechef.com/ratings/all?filterBy=Institution%3DBengal%20College%20of%20Engineering%20and%20Technology&order=asc&sortBy=global_rank"
                      target="_blank"
                      className="flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <MdOutlineLeaderboard className="mx-1 text-lg" />
                      Leaderboard
                    </a>
                    <a
                      href="/resources"
                      className="flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <RiBook2Line className="mx-1 text-lg" />
                    Resources
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="focus:outline-none inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* Mobile menu*/}
          {ref => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <a
                      href="/"
                      className="flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <AiOutlineHome className="mx-1 text-lg" /> Home
                    </a>

                    <a
                      href="/events"
                      className="flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <BsCalendarEvent className="mx-1 text-lg" /> Events
                    </a>

                   
                    <a
                      href="/teams"
                      className="flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <RiTeamLine className="mx-1 text-lg" />
                      Teams
                    </a>

                    <a
                      href="https://www.codechef.com/ratings/all?filterBy=Institution%3DBengal%20College%20of%20Engineering%20and%20Technology&order=asc&sortBy=global_rank"
                      target="_blank"
                      className="flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <MdOutlineLeaderboard className="mx-1 text-lg" />
                      Leaderboard
                    </a>
                    <a
                      href="/resources"
                      className="flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <RiBook2Line className="mx-1 text-lg" />
                    Resources
                    </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

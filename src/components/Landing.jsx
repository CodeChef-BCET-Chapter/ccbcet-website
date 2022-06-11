import React from "react";
import { SiDiscord } from "react-icons/si";

export default function Landing() {
  return (
    <div className="">
      <div className="mx-auto mb-5 grid max-w-7xl px-4 sm:px-6 md:mt-12 lg:grid-cols-2 lg:px-4 2xl:grid-cols-5">
        <div className="mx-auto max-w-md px-8 py-12 sm:max-w-xl lg:max-w-full lg:py-24 xl:mr-0 2xl:col-span-2">
          <div className="xl:max-w-xl">
            {/* <img className="h-10" src="/img/ccbcet-logo.svg" alt="Workcation" /> */}
            <img
              className="mt-6 rounded-lg object-center sm:mt-8 sm:h-64 sm:w-auto sm:object-cover lg:hidden"
              src="https://ik.imagekit.io/botoixhvc/landing_img_Z_JEK1f-D.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1654186498794"
              alt="graphics"
            />
            <h1 className="font-headline text-brand-light mt-12 text-2xl font-semibold tracking-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              CodeChef BCET Chapter
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              CodeChef BCET Chapter is a community organisation established with
              the help of CodeChef to instill the culture of Programming.
            </p>
            {/* button  */}
            <div className="  space-x-1 sm:mt-6">
              <a
                className="my-6 inline-block transform rounded-lg bg-red-600 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-700 focus:ring-opacity-50 focus:ring-offset-2 active:bg-red-700 sm:text-base"
                href="https://www.codechef.com/college-chapter/member"
                target="_blank"
              >
                become a member
              </a>
            </div>
            <div className=" my-2 flex ">
              <a
                className="flex transform  items-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-700 focus:ring-opacity-50 focus:ring-offset-2 active:bg-blue-800 sm:text-base"
                href="https://discord.gg/nDjk222EQy"
                target="_blank"
              >
                Join Our Community{" "}
                <span className=" px-2 text-2xl ">
                  <SiDiscord />
                </span>
              </a>
            </div>
          </div>
        </div>
        {/* largest view  */}
        <div className="relative hidden lg:block 2xl:col-span-3  ">
          <img
            className="absolute inset-0 h-full min-w-full overflow-hidden  "
            src="https://ik.imagekit.io/botoixhvc/landing_img_Z_JEK1f-D.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1654186498794"
            alt="Woman workcationing on the beach"
          />
        </div>
      </div>
    </div>
  );
}

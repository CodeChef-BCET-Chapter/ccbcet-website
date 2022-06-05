import React from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { MdLocationPin, MdAccessTime } from "react-icons/md";
import Skeleton from "react-loading-skeleton";

function EventCardSkelton() {
  return (
    <div>
      {/* Mobile view skelton */}
      <div className="group relative mb-auto mt-auto grid h-72  w-auto transform  grid-cols-2 overflow-hidden rounded-lg bg-white shadow-xl  sm:hidden">
        <div className="relative overflow-hidden ">
          <Skeleton height={300} width={400} />
        </div>

        <div className=" w-46 mx-5 mt-10 ">
          <div className="px-3 py-3">
            <Skeleton count={3} />
          </div>
          <div className=" mt-10 w-full px-3 py-3   ">
            <Skeleton height={40} borderRadius={20} />
          </div>
        </div>
      </div>

      {/* dextop view skelton */}
      <div className=" group relative mb-auto mt-auto hidden  h-96 w-72   transform overflow-hidden rounded-lg  shadow-xl  sm:block">
        <Skeleton height={200} borderRadius={10} />

        <div className="px-3 py-3 subpixel-antialiased  ">
          <Skeleton count={3} />
        </div>
        <div className="float-right w-32 px-3 py-3  ">
          <Skeleton height={40} borderRadius={20} />
        </div>
      </div>
    </div>
  );
}

export default EventCardSkelton;

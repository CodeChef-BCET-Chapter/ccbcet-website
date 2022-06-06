import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ViewprofileSkleton() {
  return (
    <div className="bg-gray-100 pb-20 ">
      <div className="m-auto  h-60 w-full rounded-b-2xl "></div>
      <div className="relative z-40 mx-2 ">
        <div className="m-auto -mt-16 w-full rounded-xl    bg-white p-4 shadow-xl sm:w-2/3 md:w-1/2 ">
          <div className="-mt-20 mb-6 flex justify-center">
            <Skeleton circle width={125} height={125} />
          </div>
          <div className="flex justify-center ">
            <div className="my-5">
              <Skeleton width={200} height={30} borderRadius={10} />
            </div>
          </div>
          <div className=" space-y-2 overflow-hidden py-5 ">
            <div className="">
              <Skeleton width={300} height={30} borderRadius={10} />
            </div>
            <div className="">
              <Skeleton width={350} height={30} borderRadius={10} />
            </div>
            <div className="">
              <Skeleton width={450} height={30} borderRadius={10} />
            </div>
            <div className="">
              <Skeleton width={300} height={30} borderRadius={10} />
            </div>
            <div className="">
              <Skeleton width={360} height={30} borderRadius={10} />
            </div>
          </div>
          <div className="my-5 overflow-hidden">
            <Skeleton width={400} height={30} borderRadius={10} />
          </div>
          <div className="my-5 h-28 overflow-hidden">
            <Skeleton width={450} height={40} borderRadius={10} />
            <div className="float-right my-5 w-32 px-3 ">
              <Skeleton height={40} borderRadius={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewprofileSkleton;

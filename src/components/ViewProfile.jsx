import React, { useState, useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { getRealTimeUserData } from "../firestoredb";
import { SiCodechef } from "react-icons/si";
import { HiOutlineMail, HiOutlineAcademicCap } from "react-icons/hi";
import { BiBuildings, BiPhoneCall, BiLinkAlt } from "react-icons/bi";
import { BsLinkedin, BsGithub, BsTwitter } from "react-icons/bs";
import { MdOutlineEngineering, MdOutlineModeEdit } from "react-icons/md";
import { IKImage } from "imagekitio-react";
import "react-loading-skeleton/dist/skeleton.css";
const urlEndpoint = "https://ik.imagekit.io/botoixhvc";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import ViewprofileSkleton from "./skelton/ViewprofileSkleton";

function ViewProfile() {
  const { user } = UserAuth();
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    user &&
      getRealTimeUserData(user?.uid).then(value => {
        if (!value.data) history.push("/create-profile");
        else setUserData(value.data);
        setLoading(false);
      });
  }, []);
  console.log(userData);
  return (
    <div className="bg-gray-100 pb-20 ">
      {isLoading && <ViewprofileSkleton />}
      <div className="m-auto  h-60 w-full rounded-b-2xl ">
        <IKImage
          src="https://ik.imagekit.io/botoixhvc/profile_banner_zgkSWEabQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1654189179267"
          alt="profile_banner"
          urlEndpoint={urlEndpoint}
          lqip={{ active: true }}
          loading="lazy"
          className=" h-60 w-full rounded-b-xl"
        />
      </div>
      <div className="relative  mx-2">
        <div className="m-auto -mt-16 w-full rounded-xl  bg-white p-4 shadow-xl sm:w-2/3 md:w-1/2 ">
          <div className=" flex justify-center ">
            <div className=" -mt-20 mb-6 h-32 w-32  rounded-full border-3 border-white bg-white  ">
              <img
                src={user?.photoURL}
                alt="ViewProfile"
                className=" w-full rounded-full object-cover  "
              />
            </div>
          </div>
          <div className="text-center text-gray-700">
            <h3 className="bold font-sans text-xl text-gray-900">
              {userData.name}
            </h3>
            <p className="mt-4 font-sans font-light ">{userData.bio}</p>
          </div>
          <div className=" space-y-2 pt-4 text-left text-lg text-gray-600 ">
            <a href="" className="flex items-center">
              <span className="px-2 text-2xl">
                <SiCodechef />
              </span>
              {userData.codechefusername}
            </a>
            <a href="" className="flex items-center">
              <span className="px-2 text-2xl ">
                <HiOutlineMail />
              </span>
              {userData.email}
            </a>
            <p className="flex items-center">
              <span className="px-2 text-2xl ">
                <BiBuildings />
              </span>
              {userData.college}
            </p>
            <a href="" className="flex items-center">
              <span className="px-2 text-2xl">
                <BiPhoneCall />
              </span>
              {userData.contact}
            </a>

            <p className="flex items-center">
              <span className="px-2 text-2xl">
                <HiOutlineAcademicCap />
              </span>
              {userData.branch}
            </p>
            <p className=" flex  items-center pt-4 font-bold">
              <span className="px-2 text-2xl">
                <BiLinkAlt />
              </span>
              Social Links
            </p>
            <div className="flex space-x-3 py-2 pl-10 text-xl  ">
              <a href={userData.linkedin} className=" " target="_blank">
                <span className="hover:text-blue-700">
                  <BsLinkedin />
                </span>
              </a>
              <a href={userData.github} className="" target="_blank">
                <span className="hover:text-black">
                  <BsGithub />
                </span>
              </a>
              <a href={userData.twitter} className="" target="_blank">
                <span className="hover:text-blue-700">
                  <BsTwitter />
                </span>
              </a>
            </div>
            <p className=" flex  items-center pt-4 font-bold">
              <span className="px-2 text-2xl">
                <MdOutlineEngineering />
              </span>
              Skills
            </p>
            <div className="flex rounded-md border border-gray-300 p-4 ">
              <p className="">{userData.skills}</p>
            </div>
          </div>
          <div className=" flex justify-end p-4 ">
            <Link
              to="/create-profile"
              className="text-md flex  items-center justify-end rounded-lg bg-red-600 px-5 py-2.5 text-center font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300  sm:w-auto"
            >
              <span className="px-2 text-2xl ">
                <MdOutlineModeEdit />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;

import React, { useState, Fragment } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Menu, Transition } from "@headlessui/react";

export default function ProfilePic() {
  const { user, logOut } = UserAuth();
  const [showDropDown, setShowDropDown] = useState(false);

  const handleDropDown = () => {
    setShowDropDown(old => !old);
  };
  return (
    <>
      <button onClick={handleDropDown}></button>
      <div className=" ">
        <Menu as="div" className="relative inline-block ">
          <Menu.Button className="h-10 w-10 rounded-full">
            <img
              className="h-10 w-10 rounded-full  "
              src={user.photoURL ? user.photoURL : "/img/Teams/exe.png"}
              alt="Rounded avatar"
            />
          </Menu.Button>

          <Menu.Items className="absolute right-0 mt-2 w-56 rounded-md bg-white shadow-lg ">
            <div className="px-1 py-1  ">
              <Menu.Item>
                <button className="  flex w-full items-center rounded-md px-2 py-2 text-sm  text-gray-900 hover:bg-red-500  hover:text-white">
                  Profile
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={logOut}
                  className="  flex w-full items-center rounded-md px-2  py-2 text-sm  text-gray-900 hover:bg-red-500 hover:text-white"
                >
                  Logout
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </>
  );
}

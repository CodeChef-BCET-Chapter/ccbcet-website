import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function ProfilePic() {
  const { user, logOut } = UserAuth();
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="relative z-50 inline-block">
        <img
          onClick={() => setMenu(old => !old)}
          className="h-10 w-10 rounded-full  "
          src={user.photoURL ? user.photoURL : "/img/Teams/exe.png"}
          alt="Rounded avatar"
        />
        {menu && (
          <div className="absolute right-0 mt-2 w-48  rounded-md bg-white p-1 text-lg text-gray-900 shadow-lg">
            <div class="px-4 py-3 text-sm  ">
              <p className="truncate font-medium ">{user.displayName}</p>
              <div class="truncate ">{user.email}</div>
            </div>
            <Link
              className="block w-full rounded-lg py-1 px-2 hover:bg-red-500 hover:text-white"
              to="/view-profile"
            >
              Profile
            </Link>
            <span
              className="block w-full cursor-pointer  rounded-lg py-1 px-2 hover:bg-red-500 hover:text-white"
              onClick={logOut}
            >
              Logout
            </span>
          </div>
        )}
      </div>
    </>
  );
}

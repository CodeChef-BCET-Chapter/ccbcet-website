import React, { useState } from "react";
import { UserAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

import reactDom from "react-dom";

//.backdrop {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   z-index: 10;
//   background: rgba(0, 0, 0, 0.75);
// }

const Backdrop = (props) => {
  return <div className=" fixed top-0 left-0 w-full h-[100vh] z-10" onClick={props.onConfirm} />;
};

export default function ProfilePic() {
  const { user, logOut } = UserAuth();
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="relative z-50 inline-block">
        <img
          onClick={() => setMenu((old) => !old)}
          className="h-10 w-10 rounded-full  "
          src={user.photoURL ? user.photoURL : "https://ik.imagekit.io/botoixhvc/user.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1654539990149"}
          alt="Rounded avatar"
        />

        {menu && (
          <>
            {reactDom.createPortal(
              <Backdrop onConfirm={() => setMenu(false)} />,
              document.getElementById("backdrop-root")
            )}
            <div className="absolute right-0 mt-2 w-48  rounded-md bg-white p-1 text-lg text-gray-900 shadow-lg">
              <div className="px-4 py-3 text-sm  ">
                <p className="truncate font-medium ">{user.displayName}</p>
                <div className="truncate ">{user.email}</div>
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
          </>
        )}
      </div>
    </>
  );
}

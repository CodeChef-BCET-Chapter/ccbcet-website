import React, { useEffect } from "react";
import { MdLogin } from "react-icons/md";
import { UserAuth } from "../../context/AuthContext";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
import { AiOutlineLoading } from "react-icons/ai";

export default function Login() {
  const { googleSignIn } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <div>
        <img
          className=" h-8 w-8"
          src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif"
          alt="loader"
        />
      </div>
    );
  }
  if (error) {
    return 
  }
  return (
    <button
      onClick={handleGoogleSignIn}
      className="flex rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
    >
      <MdLogin className="mx-1 text-lg" />
      Login
    </button>
  );
}

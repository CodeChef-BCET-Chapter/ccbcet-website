import React, { useEffect } from "react";
import { MdLogin } from "react-icons/md";
import { UserAuth } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

export default function Login() {
  const { googleSignIn, user } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

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

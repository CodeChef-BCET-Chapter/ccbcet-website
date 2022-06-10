import React, { useContext, createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";
import { useHistory } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const history = useHistory();
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    // signInWithPopup(auth, provider);
    signInWithRedirect(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  onAuthStateChanged(auth, currentUser => {
    console.log("loading");
    setUser(currentUser);
    console.log("loaded");
    if (
      currentUser &&
      currentUser.metadata.creationTime === currentUser.metadata.lastSignInTime
    ) {
      // history.push("/create-profile");
      history.push("/event-registration/CE6VSqi7LLhwKLXTxdaV");
    }
  });

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

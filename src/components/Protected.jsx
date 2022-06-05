import React from 'react';
import { UserAuth } from '../context/AuthContext';

const Protected = ({ children }) => {
  const { googleSignIn, user } = UserAuth();
  const handleGoogleSignIn = async () => {
    try {
      !user && await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  if (!user) {
    handleGoogleSignIn();
  }

  return children;
};

export default Protected;
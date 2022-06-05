// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOxAtrZk3MVLRIbyCSs17IAOoBPXXtAic",
  authDomain: "ccbcet-website.firebaseapp.com",
  projectId: "ccbcet-website",
  storageBucket: "ccbcet-website.appspot.com",
  messagingSenderId: "576324123465",
  appId: "1:576324123465:web:895b5289e3a26dcc1a3898",
  measurementId: "G-4LRQV1RBD3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

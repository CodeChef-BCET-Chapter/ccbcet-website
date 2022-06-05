import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

import { db } from "./firebase";

export const addUserData = async (formData, id) => {
  try {
    const docRef = await setDoc(doc(db, "users", id), formData);
    console.log("Document written with ID: ", id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// export const getUserData = async (id) => {
//   const docRef = doc(db, "cities", "SF");
//   const docSnap = await getDoc(docRef);

//   if (docSnap.exists()) {
//     console.log("Document data:", docSnap.data());
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// };

// // export const getRealTimeUserData = (id) => {
// //   onSnapshot(doc(db, "users", id), (doc) => {
// //     const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
// //     console.log(source, doc.data())
// //   });
// // };

export const getRealTimeUserData = (id) => {
  return new Promise((resolve, reject) => {
    onSnapshot(doc(db, "users", id), (doc) => {
      const source = doc.metadata.hasPendingWrites ? "Local" : "Server";
      // console.log(source, doc.data());
      resolve({ source, data: doc.data() });
    });
  });
};

export const getEvents = async () => {
  let eventData = [];
  const querySnapshot = await getDocs(collection(db, "events"));
  querySnapshot.forEach((doc, index) => {
    eventData.push({ ...doc.data(), id: doc.id });
  });
  return eventData;
};

export const addParticipants = async (formData, id, userid) => {
  try {
    const docRef = await addDoc(
      collection(db, `events/${id}/participants`),
      formData
    );
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

//
//   return eventData;

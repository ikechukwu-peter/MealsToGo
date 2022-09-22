import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9Aq03qt-Vz5fpw0bRLKY9HVuU9iroawQ",
  authDomain: "mealstogo-fdb5a.firebaseapp.com",
  projectId: "mealstogo-fdb5a",
  storageBucket: "mealstogo-fdb5a.appspot.com",
  messagingSenderId: "36341839273",
  appId: "1:36341839273:web:14402ae4f1726478f900b8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const authentication = getAuth(app);

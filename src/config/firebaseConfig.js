import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDmHUPxbMVaoQZJW31Z2bFYlE2eJRyDFBc",
  authDomain: "react-navite-funcpro.firebaseapp.com",
  projectId: "react-navite-funcpro",
  storageBucket: "react-navite-funcpro.firebasestorage.app",
  messagingSenderId: "344988874648",
  appId: "1:344988874648:web:ea80edf09ed2daec241ded",
  measurementId: "G-EYPLTYLY51"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

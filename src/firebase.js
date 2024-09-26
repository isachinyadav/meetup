import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAp25y1Jaa6Rzp-ntZEZYHhuAWZC_XbwAE",
  authDomain: "chatt-a57b4.firebaseapp.com",
  projectId: "chatt-a57b4",
  storageBucket: "chatt-a57b4.appspot.com",
  messagingSenderId: "353789878403",
  appId: "1:353789878403:web:7e3b35d96b7a6667773bb6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

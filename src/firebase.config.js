import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe1jOmd5mkD848eE054CNY8ySj45x3Kig",
  authDomain: "house-marketplace-app-a3cc6.firebaseapp.com",
  projectId: "house-marketplace-app-a3cc6",
  storageBucket: "house-marketplace-app-a3cc6.appspot.com",
  messagingSenderId: "926777938922",
  appId: "1:926777938922:web:8d0fef12f7a63f9d021893",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();

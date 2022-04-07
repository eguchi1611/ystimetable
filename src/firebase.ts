// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBin_KqBadx9wSenDfRsaAPWqPLt0LSj4w",
  authDomain: "timetableys.firebaseapp.com",
  projectId: "timetableys",
  storageBucket: "timetableys.appspot.com",
  messagingSenderId: "610104074925",
  appId: "1:610104074925:web:194900c15a43239c2b9c24",
  measurementId: "G-3K0R87H6FR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

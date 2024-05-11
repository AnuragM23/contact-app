// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMkYvM0KrR904H_cD_-ei82mx1ln15HV8",
  authDomain: "projects-3ad00.firebaseapp.com",
  projectId: "projects-3ad00",
  storageBucket: "projects-3ad00.appspot.com",
  messagingSenderId: "922696660694",
  appId: "1:922696660694:web:0cbf8f905d8544c3ff3b77",
  measurementId: "G-09FKRB0VHY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATbML31C-UCikCnHm0PQtVssXSXpqHCzI",
  authDomain: "myfullauthsys.firebaseapp.com",
  projectId: "myfullauthsys",
  storageBucket: "myfullauthsys.appspot.com",
  messagingSenderId: "958099584023",
  appId: "1:958099584023:web:a40b6d43726e8fd0a39852"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH=getAuth(FIREBASE_APP)
export const FIREBASE_DB=getFirestore(FIREBASE_APP)
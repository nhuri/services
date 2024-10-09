// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTBwXNyI30orgXmwFX7nh4Jm3cYLChrwc",
  authDomain: "elevation-474bb.firebaseapp.com",
  projectId: "elevation-474bb",
  storageBucket: "elevation-474bb.appspot.com",
  messagingSenderId: "635477909265",
  appId: "1:635477909265:web:4835e41b3dda48cf8276b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export let storage = getStorage(app)
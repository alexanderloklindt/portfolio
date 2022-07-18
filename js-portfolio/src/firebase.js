// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCViwU_Rgx6LSvWW7F3jm8GJj7KOfsSXAo",
  authDomain: "portfolio-21108.firebaseapp.com",
  projectId: "portfolio-21108",
  storageBucket: "portfolio-21108.appspot.com",
  messagingSenderId: "54694038868",
  appId: "1:54694038868:web:6bb9b2f221330b2d46ccc1",
  measurementId: "G-5Q4E5JHGMG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzBl8Fhif5uy88Fd0XYuM1nK5Xp9FanwE",
  authDomain: "admin-managed-user-acces-84c6a.firebaseapp.com",
  projectId: "admin-managed-user-acces-84c6a",
  storageBucket: "admin-managed-user-acces-84c6a.appspot.com",
  messagingSenderId: "789575746518",
  appId: "1:789575746518:web:376c7761cde22dce9b9a77",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };

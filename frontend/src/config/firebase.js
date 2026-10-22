// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcbRU8ij7cCcIkwdORh-ctNyjXbF998XA",
  authDomain: "session-scribe-50cd5.firebaseapp.com",
  projectId: "session-scribe-50cd5",
  storageBucket: "session-scribe-50cd5.firebasestorage.app",
  messagingSenderId: "746487505702",
  appId: "1:746487505702:web:5e0733af8f826ab34897e7",
  measurementId: "G-82S45FDB2Q"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();

// Initialize Firebase
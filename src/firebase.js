// Import the functions you need from the SDKs you need

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKaXU5iXJl9NBvVYw5d9br-K63L_yaKZ0",
  authDomain: "react-chat-f1883.firebaseapp.com",
  projectId: "react-chat-f1883",
  storageBucket: "react-chat-f1883.appspot.com",
  messagingSenderId: "275666939243",
  appId: "1:275666939243:web:408324a26746c8e107702e",
  measurementId: "G-542S9QNZHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

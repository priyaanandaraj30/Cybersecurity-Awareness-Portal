import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyC9lmwY9KCkpu89p8M2qm6XGXBppQQxnxo",
  authDomain: "cybersecurity-awarness-p-ab0b5.firebaseapp.com",
  projectId: "cybersecurity-awarness-p-ab0b5",
  storageBucket: "cybersecurity-awarness-p-ab0b5.firebasestorage.app",
  messagingSenderId: "27113388371",
  appId: "1:27113388371:web:1382822611fae0bbe049a6",
  measurementId: "G-BXQWGHBGYF"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
};
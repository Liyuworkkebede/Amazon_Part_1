import firebase from "firebase/compat/app"; // Import the compat version of Firebase
import "firebase/compat/firestore"; // Import Firestore compat
import "firebase/compat/auth"; // Import Auth compat

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAvNWwZCLX3DmiiSVJMiH2O7cRYLH8eJ8c",
  authDomain: "clone-beb1a.firebaseapp.com",
  projectId: "clone-beb1a",
  storageBucket: "clone-beb1a.appspot.com",
  messagingSenderId: "691940760919",
  appId: "1:691940760919:web:3ed346307f51ef4f643212",
};

// Initialize Firebase using the compat version
const app = firebase.initializeApp(firebaseConfig);

// Initialize Firestore and Auth
const db = firebase.firestore(); // Use the compat Firestore
const auth = firebase.auth(); // Use the compat Auth

export { db, auth };

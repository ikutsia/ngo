// src/firebase.config.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getAnalytics } from "firebase/analytics";

// Firebase configuration using environment variables
// IMPORTANT: Ensure these are in your .env file at the project root
// and prefixed with REACT_APP_ (e.g., REACT_APP_FIREBASE_API_KEY)
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// A debugging check to see if the variables are being loaded
const isConfigValid = !!firebaseConfig.apiKey && !!firebaseConfig.authDomain;
if (!isConfigValid) {
  console.error(
    "Firebase initialization failed: Environment variables not loaded correctly."
  );
  console.log(
    "Check your .env file in the project root and restart the server."
  );
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app); // Export Firestore instance
export const analytics = firebaseConfig.measurementId
  ? getAnalytics(app)
  : null;

// Export the app instance as well
export default app;

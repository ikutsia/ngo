// src/firebase.config.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore
import { getStorage } from "firebase/storage"; // Import Storage
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

// Enhanced debugging and validation
console.log("=== FIREBASE CONFIG DEBUG ===");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("Environment variables status:");
console.log(
  "- REACT_APP_FIREBASE_API_KEY:",
  !!process.env.REACT_APP_FIREBASE_API_KEY
);
console.log(
  "- REACT_APP_FIREBASE_AUTH_DOMAIN:",
  !!process.env.REACT_APP_FIREBASE_AUTH_DOMAIN
);
console.log(
  "- REACT_APP_FIREBASE_PROJECT_ID:",
  !!process.env.REACT_APP_FIREBASE_PROJECT_ID
);
console.log(
  "- REACT_APP_FIREBASE_APP_ID:",
  !!process.env.REACT_APP_FIREBASE_APP_ID
);

// Show actual values (first few characters only for security)
console.log("Firebase config values:");
console.log(
  "- apiKey:",
  process.env.REACT_APP_FIREBASE_API_KEY
    ? process.env.REACT_APP_FIREBASE_API_KEY.substring(0, 15) + "..."
    : "UNDEFINED"
);
console.log(
  "- authDomain:",
  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "UNDEFINED"
);
console.log(
  "- projectId:",
  process.env.REACT_APP_FIREBASE_PROJECT_ID || "UNDEFINED"
);
console.log("- appId:", process.env.REACT_APP_FIREBASE_APP_ID || "UNDEFINED");
console.log("=== END DEBUG ===");

// Check if all required Firebase config values are present
const requiredFields = ["apiKey", "authDomain", "projectId", "appId"];
const missingFields = requiredFields.filter((field) => !firebaseConfig[field]);

if (missingFields.length > 0) {
  console.error(
    "Firebase configuration is missing required fields:",
    missingFields
  );
  console.error("Please check your environment variables:");
  console.error("- REACT_APP_FIREBASE_API_KEY");
  console.error("- REACT_APP_FIREBASE_AUTH_DOMAIN");
  console.error("- REACT_APP_FIREBASE_PROJECT_ID");
  console.error("- REACT_APP_FIREBASE_APP_ID");

  // In development, show a more helpful error
  if (process.env.NODE_ENV === "development") {
    throw new Error(
      `Firebase configuration is missing: ${missingFields.join(
        ", "
      )}. Please check your .env file.`
    );
  }
}

// Initialize Firebase
let app, auth, db, storage, analytics;

try {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
  storage = getStorage(app);

  // Only initialize analytics if measurementId is provided
  if (firebaseConfig.measurementId) {
    analytics = getAnalytics(app);
  }

  console.log("Firebase initialized successfully");
} catch (error) {
  console.error("Failed to initialize Firebase:", error);

  // In development, throw the error to make it obvious
  if (process.env.NODE_ENV === "development") {
    throw error;
  }
}

// Export the Firebase services
export { auth, db, storage, analytics };
export default app;

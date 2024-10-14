import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";  // For Firestore
import { getAuth } from "firebase/auth";  // For Authentication
import { getStorage } from "firebase/storage";  // For Storage
// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);  // Firestore instance
// Initialize Auth (if you are using Firebase Authentication)
const auth = getAuth(app);
// Initialize Storage (if you're using Firebase Storage)
const storage = getStorage(app);

export { db, auth, storage };





















// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";  
// import { getAuth } from "firebase/auth";  
// import { getStorage } from "firebase/storage";  

// import { themeConfig } from '../docusaurus.config';

// const firebaseConfig = themeConfig.customFields.firebaseConfig;

// // Firebase configuration
// // const firebaseConfig = {
// //   apiKey: window._env_.REACT_APP_FIREBASE_API_KEY,
// //   appId: window._env_.REACT_APP_FIREBASE_APP_ID,
// //   authDomain: window._env_.REACT_APP_FIREBASE_AUTH_DOMAIN,
// //   projectId: window._env_.REACT_APP_FIREBASE_PROJECT_ID,
// //   storageBucket: window._env_.REACT_APP_FIREBASE_STORAGE_BUCKET,
// //   messagingSenderId: window._env_.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// //   measurementId: window._env_.REACT_APP_FIREBASE_MEASUREMENT_ID,
// // };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Initialize Firestore
// const db = getFirestore(app);  
// // Initialize Auth (if you are using Firebase Authentication)
// const auth = getAuth(app);
// // Initialize Storage (if you're using Firebase Storage)
// const storage = getStorage(app);

// export { db, auth, storage };


// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";  
// import { getAuth } from "firebase/auth";  
// import { getStorage } from "firebase/storage";  

// // Load environment variables
// const REACT_APP_FIREBASE_API_KEY = globalThis.window?.process?.env?.REACT_APP_FIREBASE_API_KEY 
//   || import.meta.env.REACT_APP_FIREBASE_API_KEY 
//   || window._env_.REACT_APP_FIREBASE_API_KEY;

// const REACT_APP_FIREBASE_AUTH_DOMAIN = globalThis.window?.process?.env?.REACT_APP_FIREBASE_AUTH_DOMAIN 
//   || import.meta.env.REACT_APP_FIREBASE_AUTH_DOMAIN 
//   || window._env_.REACT_APP_FIREBASE_AUTH_DOMAIN;

// const REACT_APP_FIREBASE_PROJECT_ID = globalThis.window?.process?.env?.REACT_APP_FIREBASE_PROJECT_ID 
//   || import.meta.env.REACT_APP_FIREBASE_PROJECT_ID 
//   || window._env_.REACT_APP_FIREBASE_PROJECT_ID;

// const REACT_APP_FIREBASE_STORAGE_BUCKET = globalThis.window?.process?.env?.REACT_APP_FIREBASE_STORAGE_BUCKET 
//   || import.meta.env.REACT_APP_FIREBASE_STORAGE_BUCKET 
//   || window._env_.REACT_APP_FIREBASE_STORAGE_BUCKET;

// const REACT_APP_FIREBASE_MESSAGING_SENDER_ID = globalThis.window?.process?.env?.REACT_APP_FIREBASE_MESSAGING_SENDER_ID 
//   || import.meta.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID 
//   || window._env_.REACT_APP_FIREBASE_MESSAGING_SENDER_ID;

// const REACT_APP_FIREBASE_APP_ID = globalThis.window?.process?.env?.REACT_APP_FIREBASE_APP_ID 
//   || import.meta.env.REACT_APP_FIREBASE_APP_ID 
//   || window._env_.REACT_APP_FIREBASE_APP_ID;

// const REACT_APP_FIREBASE_MEASUREMENT_ID = globalThis.window?.process?.env?.REACT_APP_FIREBASE_MEASUREMENT_ID 
//   || import.meta.env.REACT_APP_FIREBASE_MEASUREMENT_ID 
//   || window._env_.REACT_APP_FIREBASE_MEASUREMENT_ID;

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: REACT_APP_FIREBASE_API_KEY,
//   authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: REACT_APP_FIREBASE_APP_ID,
//   measurementId: REACT_APP_FIREBASE_MEASUREMENT_ID
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Initialize Firestore
// const db = getFirestore(app);  
// // Initialize Auth (if you are using Firebase Authentication)
// const auth = getAuth(app);
// // Initialize Storage (if you're using Firebase Storage)
// const storage = getStorage(app);

// export { db, auth, storage };





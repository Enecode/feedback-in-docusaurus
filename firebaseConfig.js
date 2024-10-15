import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";  // For Firestore
import { getAuth } from "firebase/auth";  // For Authentication
import { getStorage } from "firebase/storage";  // For Storage

// Firebase configuration start

// paste your firebase config here

// Firebase configuration ends


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);  
// Initialize Auth (if you are using Firebase Authentication)
const auth = getAuth(app);
// Initialize Storage (if you're using Firebase Storage)
const storage = getStorage(app);

export { db, auth, storage };

import { initializeApp } from "firebase/app"; // Import Firebase App initialization
import { getAuth } from "firebase/auth"; // Import Firebase authentication
import { getFirestore } from "firebase/firestore"; // Import Firestore database

// Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZLQ8u_rlWsxxOTM8v9GOIcwjX7s3Yp0c", // API key for authentication
    authDomain: "quizfizz-4c8ef.firebaseapp.com", // Authentication domain
    projectId: "quizfizz-4c8ef", // Firebase project ID
    storageBucket: "quizfizz-4c8ef.firebasestorage.app", // Storage bucket for file uploads
    messagingSenderId: "259803717910", // Sender ID for messaging
    appId: "1:259803717910:web:d7f68eb999d687d55a3037", // Unique app ID
    measurementId: "G-BXMF2QH51S" // Measurement ID for analytics
};
  
// Initialize Firebase App
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth();

// Initialize Firestore Database
export const db = getFirestore(app);

// Export app as default
export default app;

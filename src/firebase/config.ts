// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey:  import.meta.env.VITE_APP_API_KEY,
  authDomain:  import.meta.env.VITE_APP_AUTHDOMAIN,
  projectId:   import.meta.env.VITE_APP_PROJECTID,
  storageBucket:   import.meta.env.VITE_APP_STORAGEBUCKET,
  messagingSenderId:   import.meta.env.VITE_APP_MESSAGINGSENDERID,
  appId:   import.meta.env.VITE_APP_API_KEY
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
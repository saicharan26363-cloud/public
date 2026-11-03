// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkncllFWdHWuh0ptAjqTxoEEystbcoZdE",
  authDomain: "gurdian-band-ai.firebaseapp.com",
  projectId: "gurdian-band-ai",
  storageBucket: "gurdian-band-ai.firebasestorage.app",
  messagingSenderId: "538953772375",
  appId: "1:538953772375:web:7687a4aaecabc1fabb2212",
  measurementId: "G-HVNLRKG5PX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
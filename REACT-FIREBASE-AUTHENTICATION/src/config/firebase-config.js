
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCx5oBdZ0YHIdwLDc0wtIbQzVamJS-4ZH0",
  authDomain: "fir-auth1-f2aaf.firebaseapp.com",
  projectId: "fir-auth1-f2aaf",
  storageBucket: "fir-auth1-f2aaf.firebasestorage.app",
  messagingSenderId: "595409913425",
  appId: "1:595409913425:web:9713e93d26748149eb9a70",
  measurementId: "G-2RKKW1TBMS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)

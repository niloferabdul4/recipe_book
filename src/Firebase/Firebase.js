// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCYg7qH73Ai_9T-2ogM2iMTH5qeR5iJZoo",
  authDomain: "recipebook-dc71a.firebaseapp.com",
  projectId: "recipebook-dc71a",
  storageBucket: "recipebook-dc71a.appspot.com",
  messagingSenderId: "614715154199",
  appId: "1:614715154199:web:683b27bd4292fa58a6e152"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAe4lp8LfVaxdwd9wYH4N5mx8X14D0Pi0s",
  authDomain: "e-commerce-7d5ba.firebaseapp.com",
  projectId: "e-commerce-7d5ba",
  storageBucket: "e-commerce-7d5ba.appspot.com",
  messagingSenderId: "197356755736",
  appId: "1:197356755736:web:00e68ab6fea756f12ddc6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//variable data base
export const db = getFirestore(app)
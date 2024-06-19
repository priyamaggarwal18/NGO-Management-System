// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO33u7FMBq_U-EWrzO-dz0x9f0Uuxz50Q",
  authDomain: "cfg-jpmc.firebaseapp.com",
  projectId: "cfg-jpmc",
  storageBucket: "cfg-jpmc.appspot.com",
  messagingSenderId: "714567285033",
  appId: "1:714567285033:web:010fa2165ece5c0432df38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

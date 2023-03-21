// Your firebase initial code should come here.
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7xoYCWLTjH9GBG1H9b33T3i9-fs77K4w",
    authDomain: "recoeded-demo.firebaseapp.com",
    projectId: "recoeded-demo",
    storageBucket: "recoeded-demo.appspot.com",
    messagingSenderId: "272270060949",
    appId: "1:272270060949:web:a94991a3274b36a64c1a9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
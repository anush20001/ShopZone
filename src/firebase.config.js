// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-qu-QQaxZFwWg0zNgO6ViiC-VYK81mjQ",
  authDomain: "shopzone-cf5f6.firebaseapp.com",
  projectId: "shopzone-cf5f6",
  storageBucket: "shopzone-cf5f6.appspot.com",
  messagingSenderId: "350948472272",
  appId: "1:350948472272:web:11a4e51a611722824935d5",
  measurementId: "G-S90D6L2QZ6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);

export default firebaseConfig

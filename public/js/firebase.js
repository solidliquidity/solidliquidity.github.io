// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyCH7D1_e-8QR9xdFxoY0ayPMivbZvZr_Vk",
    authDomain: "trade-blog-24f8b.firebaseapp.com",
    projectId: "trade-blog-24f8b",
    storageBucket: "trade-blog-24f8b.appspot.com",
    messagingSenderId: "967734420283",
    appId: "1:967734420283:web:fd28350df47613c42a4d1e",
    measurementId: "G-7SBRNJB3KK"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

let db = firebase.firestore();
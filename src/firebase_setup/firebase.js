// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmDNSQKI-bCNL8pq1d7m-GFYYmCjWg4q4",
  authDomain: "blogproject-dcf1d.firebaseapp.com",
  projectId: "blogproject-dcf1d",
  storageBucket: "blogproject-dcf1d.appspot.com",
  messagingSenderId: "720039204865",
  appId: "1:720039204865:web:69be041f5637f78f4b4800",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

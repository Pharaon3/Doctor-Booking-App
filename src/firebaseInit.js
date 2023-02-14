// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDoc, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4Xajrz0r9LfoRiiC9aW-8E29PiPmGsiM",
  authDomain: "docter-booking-3.firebaseapp.com",
  projectId: "docter-booking-3",
  storageBucket: "docter-booking-3.appspot.com",
  messagingSenderId: "925325793155",
  appId: "1:925325793155:web:47e12ccdb1f067c7dd48b6",
  measurementId: "G-WY9FKE5NEZ",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

// Initialize Firebase
// const dbconnect = () => {
//   const app = initializeApp(firebaseConfig);
//   const db = getFirestore(app);
//   const collec = collection(db, "doctor-booking");
//   const docs = getDocs(collec, "blog");
//   console.log("docs", docs);
// };

// dbconnect();

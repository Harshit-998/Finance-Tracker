import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBSyGB64_ZiMhoM5HdfR0Sczm8XGeMjKmA",
  authDomain: "finance-tracker-7e21a.firebaseapp.com",
  projectId: "finance-tracker-7e21a",
  storageBucket: "finance-tracker-7e21a.appspot.com",
  messagingSenderId: "1028789915215",
  appId: "1:1028789915215:web:451a7750fbd0134c5d243a",
  measurementId: "G-GP60E6RMM7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };

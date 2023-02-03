import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "disneyplus-clone-8cfc6.firebaseapp.com",
  projectId: "disneyplus-clone-8cfc6",
  storageBucket: "disneyplus-clone-8cfc6.appspot.com",
  messagingSenderId: "230724888883",
  appId: "1:230724888883:web:1b5e192cb84f9bcc04b646",
  measurementId: "G-WHBNM0C622",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export { signInWithGooglePopup, auth, db };

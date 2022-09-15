import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs,where,query, updateDoc,doc } from "firebase/firestore";
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvafM5UsbQYxe_iVY4cQPrLmpTsFNc7x4",
  authDomain: "my-mini-porject.firebaseapp.com",
  projectId: "my-mini-porject",
  storageBucket: "my-mini-porject.appspot.com",
  messagingSenderId: "45496877619",
  appId: "1:45496877619:web:de1c98884c55c1b0ee9946",
  measurementId: "G-4FMQ3X9LPN"
};

const app = initializeApp(firebaseConfig);

export const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'https://my-mini-porject.web.app/login',
  // This must be true.
  handleCodeInApp: true,
};

export const auth = getAuth();
export const db = getFirestore(app);

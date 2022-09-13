// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvafM5UsbQYxe_iVY4cQPrLmpTsFNc7x4",
  authDomain: "my-mini-porject.firebaseapp.com",
  projectId: "my-mini-porject",
  storageBucket: "my-mini-porject.appspot.com",
  messagingSenderId: "45496877619",
  appId: "1:45496877619:web:de1c98884c55c1b0ee9946",
  measurementId: "G-4FMQ3X9LPN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
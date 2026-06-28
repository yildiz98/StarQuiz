// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV3ydTiomgR52f124Zct3MQfhdG5uZ9XQ",
  authDomain: "staracademy-2c13f.firebaseapp.com",
  projectId: "staracademy-2c13f",
  storageBucket: "staracademy-2c13f.firebasestorage.app",
  messagingSenderId: "634694124274",
  appId: "1:634694124274:web:7eb029580018d670a8c66b",
  measurementId: "G-1QN2ERDDPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

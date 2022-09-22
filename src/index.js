import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdpPlyElCxSUviRy5Dlp33Chp1SHBRTBg",
  authDomain: "mangos-3d-ecommerce.firebaseapp.com",
  projectId: "mangos-3d-ecommerce",
  storageBucket: "mangos-3d-ecommerce.appspot.com",
  messagingSenderId: "334320297237",
  appId: "1:334320297237:web:a57949cb6f4fb1bbc6351c",
  measurementId: "G-RN4Y8MWQLM"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


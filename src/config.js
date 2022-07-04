// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBihk1d_9tI_F5GWR_5oQcJTFtZ_thFzFE",
    authDomain: "home-accountant-86757.firebaseapp.com",
    projectId: "home-accountant-86757",
    storageBucket: "home-accountant-86757.appspot.com",
    messagingSenderId: "645721946095",
    appId: "1:645721946095:web:25a0a2bc5c3cf41600681a",
    measurementId: "G-6DV2DDJ0E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);
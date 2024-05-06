// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOs8wfj7McIaW8V4LznePTcERXDvREkZw",
    authDomain: "vga-authetification.firebaseapp.com",
    databaseURL: "https://vga-authetification-default-rtdb.firebaseio.com",
    projectId: "vga-authetification",
    storageBucket: "vga-authetification.appspot.com",
    messagingSenderId: "850972390031",
    appId: "1:850972390031:web:c72be99a0899e0f8fff6fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
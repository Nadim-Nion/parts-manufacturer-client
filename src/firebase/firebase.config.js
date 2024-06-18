// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC5ReYShWrZTAePTjTqzpMcAKs1DCTr8kU",
    authDomain: "parts-manufacturer-client.firebaseapp.com",
    projectId: "parts-manufacturer-client",
    storageBucket: "parts-manufacturer-client.appspot.com",
    messagingSenderId: "812796494933",
    appId: "1:812796494933:web:3b7d3ad3f6329f74d000dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
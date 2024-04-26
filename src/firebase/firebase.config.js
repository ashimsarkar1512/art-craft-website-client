// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBBsGqZNK_VvTbEDQLAJc-dSsAyGnkvkc",
  authDomain: "art-craft-auth-d3ad3.firebaseapp.com",
  projectId: "art-craft-auth-d3ad3",
  storageBucket: "art-craft-auth-d3ad3.appspot.com",
  messagingSenderId: "1073023432246",
  appId: "1:1073023432246:web:65703fe875a7b0b5484a97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
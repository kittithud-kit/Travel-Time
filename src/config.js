import firbase from "firebase/app";
import "firbase/auth";

const firebaseConfig = firbase.initializeApp({
  apiKey: "AIzaSyD9elGnhooEDvIvAvpiHo2y8B4ViLY8wss",
  authDomain: "travel-login-223bf.firebaseapp.com",
  projectId: "travel-login-223bf",
  storageBucket: "travel-login-223bf.appspot.com",
  messagingSenderId: "132158872956",
  appId: "1:132158872956:web:2f01f3ad5a00fa33d118f9",
  measurementId: "G-V4HES9091B",
});

export default firebaseConfig;

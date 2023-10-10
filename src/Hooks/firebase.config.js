// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDw-d2x1vzNeHy8EQ5wqtL3rxrl4HQBYT4",
  authDomain: "film-forecast-project.firebaseapp.com",
  projectId: "film-forecast-project",
  storageBucket: "film-forecast-project.appspot.com",
  messagingSenderId: "259442198969",
  appId: "1:259442198969:web:d5f288ed7d03ac8d234e68"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
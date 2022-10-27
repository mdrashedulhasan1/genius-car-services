// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9ZIWJCptoZQRRUVdRrwUqJiyrdyfRQ_0",
  authDomain: "genius-car-services-2fe62.firebaseapp.com",
  projectId: "genius-car-services-2fe62",
  storageBucket: "genius-car-services-2fe62.appspot.com",
  messagingSenderId: "239918973796",
  appId: "1:239918973796:web:97e152f4579b10d97cf071"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
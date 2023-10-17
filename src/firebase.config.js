// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwoZVk-ZrtKNTMHJbA0A-bj7Rk3Ov8SYE",
  authDomain: "assingnment-10-53fde.firebaseapp.com",
  projectId: "assingnment-10-53fde",
  storageBucket: "assingnment-10-53fde.appspot.com",
  messagingSenderId: "196875948687",
  appId: "1:196875948687:web:90752a5d2d4aa1639a16fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };

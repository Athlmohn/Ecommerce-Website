import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyALv4oMrlskRFGWSKNmRfmUOXQ41hQaX0k",
  authDomain: "e-commerce-a5e8c.firebaseapp.com",
  projectId: "e-commerce-a5e8c",
  storageBucket: "e-commerce-a5e8c.appspot.com",
  messagingSenderId: "610527632436",
  appId: "1:610527632436:web:9ec9ed89428fb6721afe61",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { app, auth,provider };

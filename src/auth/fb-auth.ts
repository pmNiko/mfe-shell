// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAH0qB239I9tPzHCb93XQw2xSH8zlZdXtE",
  authDomain: "fb-auth-96210.firebaseapp.com",
  projectId: "fb-auth-96210",
  storageBucket: "fb-auth-96210.appspot.com",
  messagingSenderId: "776350014221",
  appId: "1:776350014221:web:211070374ef4ae94c2ae44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const signUp = (email: string, password: string) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, " - ", errorMessage);
    });
};

export const signIn = (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential.user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(errorCode, " - ", errorMessage);
    });
};

export const signOut = () => {
  auth.signOut().then(() => console.log("Sign Out"));
};

export const signWithGoogle = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(() => console.log("Logged with Google"))
    .catch((error) => console.log(error));
};

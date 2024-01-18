// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// import { getAnalytics } from "firebase/analytics";

import { getAuth, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: process.env.REACT_APP_apiKey,

  authDomain: process.env.REACT_APP_authDomain,

  projectId: process.env.REACT_APP_projectId,

  storageBucket: process.env.REACT_APP_storageBucket,

  messagingSenderId: process.env.REACT_APP_messagingSenderId,

  appId: process.env.REACT_APP_appId,

  measurementId: process.env.REACT_APP_measurementId,
};


// Initialise Firebase

const app = initializeApp(firebaseConfig);

// Initialise Firebase Auth Provider
const provider = new GoogleAuthProvider();

// Whenever a user interacts with the provider, we forc them to select an account
provider.setCustomParameters({
  prompt: "select_account"
});

// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export default app;
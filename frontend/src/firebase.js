import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJeEqOudLLRamAC6BvuMybTmk5M2tlbvE",
  authDomain: "tbr-prod.firebaseapp.com",
  databaseURL: "https://tbr-prod.firebaseio.com",
  projectId: "tbr-prod",
  storageBucket: "tbr-prod.appspot.com",
  messagingSenderId: "281034085325",
  appId: "1:281034085325:web:a741125b515a12a0456a84",
  measurementId: "G-4W7F11SDPS",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth };

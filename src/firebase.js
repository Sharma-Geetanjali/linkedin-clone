import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBP2tLn0M2MTuMM1g99L6QnfAXmCi-az6U",
  authDomain: "linkedin-87be9.firebaseapp.com",
  projectId: "linkedin-87be9",
  storageBucket: "linkedin-87be9.appspot.com",
  messagingSenderId: "624404230719",
  appId: "1:624404230719:web:6502aa912b8e7d8a667e8a"
};


//connects everything
const firebaseApp= firebase.initializeApp(firebaseConfig);

//firebase databse
const db = firebaseApp.firestore();

const auth= firebase.auth();
export {db, auth};
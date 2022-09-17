import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDpsk4T7qFuXWj34rtmJgAmzJDjDgo95P8",
  authDomain: "clone-450c8.firebaseapp.com",
  projectId: "clone-450c8",
  storageBucket: "clone-450c8.appspot.com",
  messagingSenderId: "1053438803643",
  appId: "1:1053438803643:web:12049650840b98bad8b39e",
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export default auth;
ssssssssssssssssss
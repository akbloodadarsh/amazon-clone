import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0UwYuajR-upZ06U-2ns1PgYcKbbTgEXE",
  authDomain: "challenge-603b1.firebaseapp.com",
  databaseURL: "https://challenge-603b1-default-rtdb.firebaseio.com",
  projectId: "challenge-603b1",
  storageBucket: "challenge-603b1.appspot.com",
  messagingSenderId: "749250139857",
  appId: "1:749250139857:web:81abd52493d83e00ab57f0",
  measurementId: "G-P5M2GJC7KT"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
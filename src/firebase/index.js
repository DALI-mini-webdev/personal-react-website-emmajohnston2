// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
import 'firebase/firestore'

firebase.initializeApp({
    apiKey: "AIzaSyAg9D48fr0x22pi6G1pz9qxcGhwhxftmZM",
    authDomain: "personal-website-bde4a.firebaseapp.com",
    projectId: "personal-website-bde4a",
    storageBucket: "personal-website-bde4a.appspot.com",
    messagingSenderId: "980441855828",
    appId: "1:980441855828:web:208de90abb5351a128bac1",
    measurementId: "G-T95SLN3Q6E"
  });


  const db = firebase.firestore();

  export default {
    firebase, db
  }
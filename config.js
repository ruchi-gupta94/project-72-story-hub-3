import firebase from 'firebase'
require("@firebase/firestore");

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBsUo8yRYxVSEKDRnC8GI2tJcPfgcYrrHE",
    authDomain: "story-hub-e729a.firebaseapp.com",
    projectId: "story-hub-e729a",
    storageBucket: "story-hub-e729a.appspot.com",
    messagingSenderId: "116655815286",
    appId: "1:116655815286:web:bb2ee817ef6e7b33193d57"
  };

// Initialize Firebase
if(!firebase.apps.length){ 
    firebase.initializeApp(firebaseConfig);
} 

export default firebase.firestore();            
import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
 
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDZQqvLhuK0HxKK7Oj2fukc5b5VRx7zTsY",
    authDomain: "eshopweb-app.firebaseapp.com",
    databaseURL: "https://eshopweb-app.firebaseio.com",
    projectId: "eshopweb-app",
    storageBucket: "eshopweb-app.appspot.com",
    messagingSenderId: "616822277645",
    appId: "1:616822277645:web:8b29a3a27c18bdf6057744"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
  const facebookAuthProvider = new firebase.auth.FacebookAuthProvider()

  export {
      db,googleAuthProvider,facebookAuthProvider,firebase
  }
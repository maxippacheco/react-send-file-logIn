import firebase from 'firebase/app';
import  'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyDzAnezNachioYO_HDRdiunyrW5CMR8qYU",
        authDomain: "send-file-76ae5.firebaseapp.com",
        projectId: "send-file-76ae5",
        storageBucket: "send-file-76ae5.appspot.com",
        messagingSenderId: "378583339063",
        appId: "1:378583339063:web:acf3e196cc14c72f84afb2",
        measurementId: "G-L8P3W2PNYR"
    };
      // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();

    const db = firebase.firestore();


    export {
        db,
        firebase
    }
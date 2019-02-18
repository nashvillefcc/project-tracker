import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCiBrVCqF3eNRc9U6txN7e1J4CFijKwFeE",
  authDomain: "project-tracker-b2138.firebaseapp.com",
  databaseURL: "https://project-tracker-b2138.firebaseio.com",
  projectId: "project-tracker-b2138",
  storageBucket: "project-tracker-b2138.appspot.com",
  messagingSenderId: "843096645908"
};
firebase.initializeApp(config);
firebase.firestore();

export default firebase;

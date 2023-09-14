import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAnrolAmKC758GWvZvGybXlF9RV0XHvnSg",
    authDomain: "jsmotos-e4995.firebaseapp.com",
    projectId: "jsmotos-e4995",
    storageBucket: "jsmotos-e4995.appspot.com",
    messagingSenderId: "513727956272",
    appId: "1:513727956272:web:1cb96298f7503ffab9b4f5",
    measurementId: "G-DYZMNEQPRD"
  };
firebase.initializeApp(firebaseConfig)
//const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage };
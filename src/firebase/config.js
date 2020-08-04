import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAJQkxNRsGX5Xk8jLCHjfIhSY2CaFkIeLc",
    authDomain: "my-view-99cf3.firebaseapp.com",
    databaseURL: "https://my-view-99cf3.firebaseio.com",
    projectId: "my-view-99cf3",
    storageBucket: "my-view-99cf3.appspot.com",
    messagingSenderId: "203962861407",
    appId: "1:203962861407:web:79ae22c0f3baf66df3d8ea"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const fireStorage = firebase.storage();
const fireFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { fireStorage, fireFirestore, timestamp };
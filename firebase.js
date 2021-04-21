// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCS6bKAWKAldvn6-5boo_F9WvvhdyFjF2o",
    authDomain: "twitter-clone-d167b.firebaseapp.com",
    databaseURL: "https://twitter-clone-d167b.firebaseio.com",
    projectId: "twitter-clone-d167b",
    storageBucket: "twitter-clone-d167b.appspot.com",
    messagingSenderId: "855597146240",
    appId: "1:855597146240:web:13c6c03460d5d0e7510665",
    measurementId: "G-ZH3211QG9P"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCDYVJPCHvoAcRBD08McpQFGBQGbrkhsmU",
//   authDomain: "twitter-clone-001-4bc86.firebaseapp.com",
//   databaseURL: "https://twitter-clone-001-4bc86.firebaseio.com",
//   projectId: "twitter-clone-001-4bc86",
//   storageBucket: "twitter-clone-001-4bc86.appspot.com",
//   messagingSenderId: "648127752772",
//   appId: "1:648127752772:web:19a6c162ef1e5bc59baa11",
//   measurementId: "G-N3TXJ83JLK"
// };
// firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

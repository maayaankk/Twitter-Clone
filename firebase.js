import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBVZNnKeBih6HZiK-Ni3TzZ2l5V7jsUXdc",
    authDomain: "twitter-clone-c8bcb.firebaseapp.com",
    databaseURL: "https://twitter-clone-c8bcb.firebaseio.com",
    projectId: "twitter-clone-c8bcb",
    storageBucket: "twitter-clone-c8bcb.appspot.com",
    messagingSenderId: "518847652977",
    appId: "1:518847652977:web:cefe19f416f511a87b27d0",
    measurementId: "G-SBL6C6WVGJ"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
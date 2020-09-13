import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCL5IYrhvRebJ5LmQ1etT6rr0JkGS1x_ow",
  authDomain: "todo-app-reactjs-4d6c4.firebaseapp.com",
  databaseURL: "https://todo-app-reactjs-4d6c4.firebaseio.com",
  projectId: "todo-app-reactjs-4d6c4",
  storageBucket: "todo-app-reactjs-4d6c4.appspot.com",
  messagingSenderId: "920049646925",
  appId: "1:920049646925:web:c19fb7ef330f023b52cb04",
  measurementId: "G-EG7R1H5D1Z",
});

const db = firebaseApp.firestore();

export default db;

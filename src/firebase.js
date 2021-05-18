import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBIXHr5XV4jMzrTN5uSt1c6NSmEqjJK9Nk",
  authDomain: "video-streaming-25311.firebaseapp.com",
  projectId: "video-streaming-25311",
  storageBucket: "video-streaming-25311.appspot.com",
  messagingSenderId: "579816681069",
  appId: "1:579816681069:web:6f279cf82835496e101964",
  measurementId: "G-S5XK0WFML9"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

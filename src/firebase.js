import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
//   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
//   projectId: "disneyplus-clone-a33d5",
//   storageBucket: "disneyplus-clone-a33d5.appspot.com",
//   messagingSenderId: "37918794208",
//   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
//   measurementId: "G-DRVLJKWRWG",
// };


//! Secondary firebase
var firebaseConfig = {
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





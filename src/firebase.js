import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDBtLLWnXjwuVWgdO_Bhzm28PtS04xPqlY",
    authDomain: "react-slack-clone-6157c.firebaseapp.com",
    databaseURL: "https://react-slack-clone-6157c.firebaseio.com",
    projectId: "react-slack-clone-6157c",
    storageBucket: "react-slack-clone-6157c.appspot.com",
    messagingSenderId: "796424653395",
    appId: "1:796424653395:web:4ec0bd648064022d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;
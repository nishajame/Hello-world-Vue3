
import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBtut1bFXReLjrbdUHxF5aSv3dB5oHuaII",
    authDomain: "hello-world-28aa9.firebaseapp.com",
    projectId: "hello-world-28aa9",
    storageBucket: "hello-world-28aa9.appspot.com",
    messagingSenderId: "588317415314",
    appId: "1:588317415314:web:c955d9c25cf057cf65d34b"
  };


  firebase.initializeApp(firebaseConfig);

  export default firebase;

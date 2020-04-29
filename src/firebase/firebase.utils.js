import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyBDB9FNK5dw-dT0VZdOt1vgofjk2C7Ya14",
    authDomain: "crwn-db-d0a1c.firebaseapp.com",
    databaseURL: "https://crwn-db-d0a1c.firebaseio.com",
    projectId: "crwn-db-d0a1c",
    storageBucket: "crwn-db-d0a1c.appspot.com",
    messagingSenderId: "907961354216",
    appId: "1:907961354216:web:e624a5f1c54fc49332c65d",
    measurementId: "G-5BJ3FNJ8RE"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
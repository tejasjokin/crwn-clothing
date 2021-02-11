import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDex4LQVnnVHe9ERED91hn5wiWRLB2Jut8",
    authDomain: "crwn-db-3ceb1.firebaseapp.com",
    projectId: "crwn-db-3ceb1",
    storageBucket: "crwn-db-3ceb1.appspot.com",
    messagingSenderId: "391023577375",
    appId: "1:391023577375:web:1ff30f7fd2a44fdc28482a",
    measurementId: "G-TEE20P22RB"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
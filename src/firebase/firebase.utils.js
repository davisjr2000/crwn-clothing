import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
    apiKey: "AIzaSyCA2gqATEYVxgxqlfmojZmOr6i6MLiskZc",
    authDomain: "crwn-clothing-48133.firebaseapp.com",
    databaseURL: "https://crwn-clothing-48133.firebaseio.com",
    projectId: "crwn-clothing-48133",
    storageBucket: "crwn-clothing-48133.appspot.com",
    messagingSenderId: "224387831953",
    appId: "1:224387831953:web:d650faefcd214825d00730"
  }

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
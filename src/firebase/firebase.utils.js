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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    console.log(userAuth)
    if (!userAuth) return;
    console.log('Now here!')
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('Error creating User', error.message);
        }
    }

    return userRef;
}
 
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
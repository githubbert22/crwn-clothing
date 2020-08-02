import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCwSuPASM8XpYTERzfVKikP9mMniAW3pyA',
  authDomain: 'crwn-db-c5586.firebaseapp.com',
  databaseURL: 'https://crwn-db-c5586.firebaseio.com',
  projectId: 'crwn-db-c5586',
  storageBucket: 'crwn-db-c5586.appspot.com',
  messagingSenderId: '60663941572',
  appId: '1:60663941572:web:9bef79b1419fcaa4b7fc91',
  measurementId: 'G-NMXW59L81M',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

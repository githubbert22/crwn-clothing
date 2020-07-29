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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

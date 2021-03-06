import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyB9f5P3esOlhedwlXMxMNXk0iAPSs8-9wM",
  authDomain: "store-608f6.firebaseapp.com",
  databaseURL: "https://store-608f6.firebaseio.com",
  projectId: "store-608f6",
  storageBucket: "store-608f6.appspot.com",
  messagingSenderId: "726503726508",
  appId: "1:726503726508:web:6c23fa188b702ec936ae09",
  measurementId: "G-PMC7N43Z1P"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

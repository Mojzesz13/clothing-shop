import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAWyLJQpO0osUd1jn-7ts3LAbMVsnBCoEU',
  authDomain: 'crown-119c4.firebaseapp.com',
  databaseURL: 'https://crown-119c4.firebaseio.com',
  projectId: 'crown-119c4',
  storageBucket: 'crown-119c4.appspot.com',
  messagingSenderId: '153244964170',
  appId: '1:153244964170:web:99a93e1e6104bafda25db3',
};

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
        ...additionalData,
      });
    } catch (error) {
      console.log('error creatin user', error.message);
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

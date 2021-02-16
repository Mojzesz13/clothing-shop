import firebase from 'firebase';
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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

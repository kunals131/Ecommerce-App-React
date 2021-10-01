
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const config = {
  apiKey: "AIzaSyBMqxuG0dXVpPPo8vYJLOszlox8XM9zfhc",
  authDomain: "core-db-341ff.firebaseapp.com",
  projectId: "core-db-341ff",
  storageBucket: "core-db-341ff.appspot.com",
  messagingSenderId: "684532758843",
  appId: "1:684532758843:web:555696b1b150be01631f1e",
  measurementId: "G-H95FD1HSJM"
}


firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);


export default firebase;

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


export const createUserProfileDocument = async (userAuth, additionalData ) => {
  if (!userAuth) {
    return ;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  console.log(snapshot);
  if (!snapshot.exists) {
    const {displayName ,email} = userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    }catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;

}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);


export default firebase;
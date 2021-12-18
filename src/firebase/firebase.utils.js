import { initializeApp } from "firebase/app";
import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { getFirestore, doc,setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDeT4uJC_DI82BUqnOyoWqG4F2bd8tgFlE",
  authDomain: "ecommerce-core-fa831.firebaseapp.com",
  projectId: "ecommerce-core-fa831",
  storageBucket: "ecommerce-core-fa831.appspot.com",
  messagingSenderId: "137287869643",
  appId: "1:137287869643:web:7cfc8cfad050291873274e"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export  const auth = getAuth(app);

export const AddUserToDataBase = async(user, userId)=>{
  await setDoc(doc(db,"users",userId), user);
  console.log('Added User')
}

export const createUser =async (email,password)=>{
  const res = await createUserWithEmailAndPassword(auth,email,password);
  const user = res.user;
  return res;

}

export const loginUser = async(email,password)=>{
  const res = await signInWithEmailAndPassword(auth,email,password);
  return res;
}

export const logoutUser =(email,password)=>{
   signOut(auth);

}

export const signInWithGoogle = ()=>{

}
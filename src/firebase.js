import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword,signOut, GoogleAuthProvider, signInWithPopup} from "firebase/auth"


   // Your web app's Firebase configuration
   const firebaseConfig = {
     apiKey: "AIzaSyCIMC-BGvBeO4VUg7DbPJq-F0Z_z87LyAM",
     authDomain: "eazy-mart-auth.firebaseapp.com",
     projectId: "eazy-mart-auth",
     storageBucket: "eazy-mart-auth.appspot.com",
     messagingSenderId: "749499150162",
     appId: "1:749499150162:web:f49130694ac44b3c40948b"
   };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth=getAuth()
  const provider=new GoogleAuthProvider()

  
  export function signup(){
     return createUserWithEmailAndPassword(auth, email, password)
  }
  
  export function signout(){
     return signOut(auth)  
  }
  
  export function googleSignin (){
    return signInWithPopup(auth, provider)
  }

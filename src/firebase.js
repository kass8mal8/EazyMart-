import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


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
  export const auth=getAuth(app)
  

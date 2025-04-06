import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAyMBq8Ch5UMQPv-Bv2JMrTFg3NTT2Uals",
    authDomain: "search-clone-59cb9.firebaseapp.com",
    projectId: "search-clone-59cb9",
    storageBucket: "search-clone-59cb9.appspot.com",
    messagingSenderId: "748779386045",

  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };

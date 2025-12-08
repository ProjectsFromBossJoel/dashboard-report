// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
    getAuth, 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword,
    sendEmailVerification,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA80t2tr136ihN57YQWwD4nYcPhyutACX4",
  authDomain: "userlogin-44d0a.firebaseapp.com",
  projectId: "userlogin-44d0a",
  storageBucket: "userlogin-44d0a.firebasestorage.app",
  messagingSenderId: "47108256134",
  appId: "1:47108256134:web:60888fa5f06dfb075d3c07",
  measurementId: "G-ZCVWTTFT2H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
    auth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendEmailVerification,
    onAuthStateChanged,
    signOut
};

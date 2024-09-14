
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQxlg_v3sMI6UA7RMPManyoZ9PLI5BIc0",
  authDomain: "laudrykart.firebaseapp.com",
  projectId: "laudrykart",
  storageBucket: "laudrykart.appspot.com",
  messagingSenderId: "204429677131",
  appId: "1:204429677131:web:7bf1d190c0e67c93a5f3ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);

const db = getFirestore();

export {auth,db};
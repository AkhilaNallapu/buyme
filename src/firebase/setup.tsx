
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCAl4PnMTfz4b3QZiFk_cdfrQ87s9DpgQc",
  authDomain: "buyme3-e7f8f.firebaseapp.com",
  projectId: "buyme3-e7f8f",
  storageBucket: "buyme3-e7f8f.appspot.com",
  messagingSenderId: "762105123996",
  appId: "1:762105123996:web:fd516300195941a8090959"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const googleProvider= new GoogleAuthProvider()
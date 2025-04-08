import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA116itWcUUsUQGAveZTZPoECPwz4OGxbo",
  authDomain: "curso-react-typescript-mf.firebaseapp.com",
  projectId: "curso-react-typescript-mf",
  storageBucket: "curso-react-typescript-mf.firebasestorage.app",
  messagingSenderId: "481783929460",
  appId: "1:481783929460:web:c73da645aab423aef38f21",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };

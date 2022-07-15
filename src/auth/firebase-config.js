import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsrc00e9U85Orh6uGaHuL1eFpJoLEpDuA",
  authDomain: "movie-app-a4952.firebaseapp.com",
  projectId: "movie-app-a4952",
  storageBucket: "movie-app-a4952.appspot.com",
  messagingSenderId: "934435979781",
  appId: "1:934435979781:web:430076c7dc7fe3c151526c",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// firebase.js

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDE38uy_h3mtmr3tx5__l_sfH3kgvogrHE",
  authDomain: "iceberg-2f78e.firebaseapp.com",
  projectId: "iceberg-2f78e",
  storageBucket: "iceberg-2f78e.appspot.com",
  messagingSenderId: "507528991944",
  appId: "1:507528991944:web:ef132584f57602d29f41fd",
  measurementId: "G-SE1V0ZKYNG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;